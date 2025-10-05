/**
 * Gmail Integration Helper
 * 
 * ⚠️ SECURITY: All Gmail operations must go through the gmail-proxy Edge Function.
 * OAuth tokens are NEVER exposed to the frontend.
 */

import { supabase } from "@/integrations/supabase/client";

export interface GmailIntegrationMetadata {
  id: string;
  user_id: string;
  gmail_email: string;
  token_expires_at: string;
  watch_expiration: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  history_id: string | null;
}

/**
 * Fetch Gmail integration metadata for the current user
 * Calls the secure SECURITY DEFINER function directly via RPC
 */
export async function getGmailIntegrations(): Promise<GmailIntegrationMetadata[]> {
  const { data, error } = await supabase.rpc('get_gmail_integrations_safe');

  if (error) {
    console.error('Failed to fetch Gmail integrations:', error);
    throw error;
  }

  return data || [];
}

/**
 * Check if user has an active Gmail integration
 */
export async function hasGmailIntegration(): Promise<boolean> {
  const { data, error } = await supabase.rpc('has_gmail_integration');
  
  if (error) {
    console.error('Failed to check Gmail integration:', error);
    return false;
  }
  
  return data || false;
}

/**
 * List Gmail messages through the secure proxy
 * @param integrationId - The Gmail integration ID
 */
export async function listGmailMessages(integrationId: string) {
  const { data, error } = await supabase.functions.invoke('gmail-proxy', {
    body: {
      action: 'list_messages',
      integrationId
    }
  });

  if (error) {
    console.error('Failed to list Gmail messages:', error);
    throw error;
  }

  return data;
}

/**
 * Get a specific Gmail message through the secure proxy
 * @param integrationId - The Gmail integration ID
 * @param messageId - The Gmail message ID
 */
export async function getGmailMessage(integrationId: string, messageId: string) {
  const { data, error } = await supabase.functions.invoke('gmail-proxy', {
    body: {
      action: 'get_message',
      integrationId,
      messageId
    }
  });

  if (error) {
    console.error('Failed to get Gmail message:', error);
    throw error;
  }

  return data;
}

/**
 * List Gmail labels through the secure proxy
 * @param integrationId - The Gmail integration ID
 */
export async function listGmailLabels(integrationId: string) {
  const { data, error } = await supabase.functions.invoke('gmail-proxy', {
    body: {
      action: 'list_labels',
      integrationId
    }
  });

  if (error) {
    console.error('Failed to list Gmail labels:', error);
    throw error;
  }

  return data;
}

/**
 * ⚠️ IMPORTANT: Never attempt to access OAuth tokens directly
 * 
 * ❌ DO NOT DO THIS:
 * ```typescript
 * const { data } = await supabase
 *   .from('gmail_integrations')
 *   .select('access_token, refresh_token');  // This will fail!
 * ```
 * 
 * ✅ ALWAYS USE:
 * - get_gmail_integrations_safe() RPC function for metadata
 * - gmail-proxy Edge Function for Gmail API calls
 */