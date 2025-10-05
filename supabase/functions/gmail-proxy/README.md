# Gmail Proxy Edge Function

## Security Overview

This Edge Function provides secure access to Gmail API operations without exposing OAuth tokens to clients.

**⚠️ CRITICAL SECURITY MEASURE:**
- OAuth tokens (access_token, refresh_token) are NEVER sent to the frontend
- All Gmail API calls must go through this Edge Function
- The function uses SERVICE ROLE access to read tokens from the database
- Tokens are automatically refreshed when expired

## Architecture

```
Frontend → Edge Function (with user JWT) → Gmail API
                ↓
        Service Role Access
                ↓
      gmail_integrations table (tokens)
```

## Usage

### 1. List Messages

```typescript
import { supabase } from "@/integrations/supabase/client";

const { data, error } = await supabase.functions.invoke('gmail-proxy', {
  body: {
    action: 'list_messages',
    integrationId: 'uuid-of-integration'
  }
});
```

### 2. Get Specific Message

```typescript
const { data, error } = await supabase.functions.invoke('gmail-proxy', {
  body: {
    action: 'get_message',
    integrationId: 'uuid-of-integration',
    messageId: 'gmail-message-id'
  }
});
```

### 3. List Labels

```typescript
const { data, error } = await supabase.functions.invoke('gmail-proxy', {
  body: {
    action: 'list_labels',
    integrationId: 'uuid-of-integration'
  }
});
```

## Accessing Gmail Integration Metadata

Use the `gmail_integrations_safe` view to get non-sensitive metadata:

```typescript
// ✅ CORRECT: Use the safe view
const { data, error } = await supabase
  .from('gmail_integrations_safe')
  .select('*')
  .eq('user_id', userId);

// ❌ NEVER: Do not query gmail_integrations directly (will fail due to RLS)
```

## Environment Variables Required

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

## Security Features

1. **Token Isolation**: OAuth tokens never leave the database
2. **Automatic Token Refresh**: Expired tokens are refreshed transparently
3. **User Authentication**: Validates JWT before processing requests
4. **Service Role Access**: Only Edge Function can access tokens
5. **Audit Logging**: All operations are logged for security monitoring