import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GmailIntegration {
  id: string;
  gmail_email: string;
  token_expires_at: string;
  access_token_decrypted?: string;
  refresh_token_decrypted?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Create Supabase client with SERVICE ROLE to access tokens
    const supabaseServiceRole = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          persistSession: false,
        },
      }
    );

    // Get user from request (using anon key in Authorization header)
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('Missing authorization header');
    }

    // Verify the user's JWT token
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabaseServiceRole.auth.getUser(token);
    
    if (authError || !user) {
      console.error('Auth error:', authError);
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { action, integrationId } = await req.json();

    console.log(`Gmail proxy request - User: ${user.id}, Action: ${action}`);

    // Fetch the Gmail integration with ENCRYPTED tokens (only accessible via service role)
    const { data: integrationData, error: fetchError } = await supabaseServiceRole
      .from('gmail_integrations')
      .select('id, access_token, refresh_token, token_expires_at, gmail_email')
      .eq('user_id', user.id)
      .eq('id', integrationId)
      .single();

    if (fetchError || !integrationData) {
      console.error('Failed to fetch integration:', fetchError);
      return new Response(
        JSON.stringify({ error: 'Gmail integration not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Decrypt tokens using the SECURITY DEFINER function
    const { data: decryptedTokens, error: decryptError } = await supabaseServiceRole
      .rpc('decrypt_gmail_token', { encrypted_token: integrationData.access_token });

    if (decryptError) {
      console.error('Failed to decrypt access token:', decryptError);
      return new Response(
        JSON.stringify({ error: 'Failed to decrypt tokens' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { data: decryptedRefreshToken, error: refreshDecryptError } = await supabaseServiceRole
      .rpc('decrypt_gmail_token', { encrypted_token: integrationData.refresh_token });

    if (refreshDecryptError) {
      console.error('Failed to decrypt refresh token:', refreshDecryptError);
      return new Response(
        JSON.stringify({ error: 'Failed to decrypt tokens' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const integration: GmailIntegration = {
      ...integrationData,
      access_token_decrypted: decryptedTokens,
      refresh_token_decrypted: decryptedRefreshToken,
    };

    // Check if token needs refresh
    const tokenExpiresAt = new Date(integration.token_expires_at);
    const now = new Date();
    let accessToken = integration.access_token_decrypted!;

    if (tokenExpiresAt <= now) {
      console.log('Access token expired, refreshing...');
      
      // Refresh the token using the decrypted refresh token
      const refreshResponse = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: Deno.env.get('GOOGLE_CLIENT_ID') ?? '',
          client_secret: Deno.env.get('GOOGLE_CLIENT_SECRET') ?? '',
          refresh_token: integration.refresh_token_decrypted!,
          grant_type: 'refresh_token',
        }),
      });

      if (!refreshResponse.ok) {
        const errorText = await refreshResponse.text();
        console.error('Token refresh failed:', errorText);
        throw new Error('Failed to refresh Gmail token');
      }

      const refreshData = await refreshResponse.json();
      accessToken = refreshData.access_token;
      
      const newExpiresAt = new Date(now.getTime() + refreshData.expires_in * 1000);

      // Update the token in database using the refresh_gmail_token function
      // This function automatically encrypts the new token
      const { error: updateError } = await supabaseServiceRole.rpc('refresh_gmail_token', {
        integration_id: integration.id,
        new_access_token: accessToken,
        new_expires_at: newExpiresAt.toISOString(),
      });

      if (updateError) {
        console.error('Failed to update refreshed token:', updateError);
        throw new Error('Failed to store refreshed token');
      }

      console.log('Token refreshed and encrypted successfully');
    }

    // Handle different Gmail API actions
    let result;
    
    switch (action) {
      case 'list_messages':
        result = await listMessages(accessToken);
        break;
      case 'get_message':
        const { messageId } = await req.json();
        result = await getMessage(accessToken, messageId);
        break;
      case 'list_labels':
        result = await listLabels(accessToken);
        break;
      default:
        throw new Error(`Unknown action: ${action}`);
    }

    return new Response(
      JSON.stringify(result),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in gmail-proxy function:', error);
    // Never log the actual token values in error messages
    const sanitizedError = error.message.replace(/ya29\.[a-zA-Z0-9_-]+/g, '[REDACTED_TOKEN]');
    return new Response(
      JSON.stringify({ error: sanitizedError }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

async function listMessages(accessToken: string) {
  const response = await fetch(
    'https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=10',
    {
      headers: { 'Authorization': `Bearer ${accessToken}` },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to list messages');
  }

  return await response.json();
}

async function getMessage(accessToken: string, messageId: string) {
  const response = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
    {
      headers: { 'Authorization': `Bearer ${accessToken}` },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to get message');
  }

  return await response.json();
}

async function listLabels(accessToken: string) {
  const response = await fetch(
    'https://gmail.googleapis.com/gmail/v1/users/me/labels',
    {
      headers: { 'Authorization': `Bearer ${accessToken}` },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to list labels');
  }

  return await response.json();
}