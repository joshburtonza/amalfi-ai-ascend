# Gmail Proxy Edge Function

## 🔒 Security Overview

This Edge Function provides **military-grade security** for Gmail API operations with end-to-end encryption.

**⚠️ CRITICAL SECURITY MEASURES:**
- **Encrypted at Rest**: OAuth tokens are encrypted using PostgreSQL pgcrypto (PGP symmetric encryption)
- **Never Exposed**: Tokens are NEVER sent to the frontend or exposed in logs
- **Service Role Only**: Only this Edge Function (using SERVICE ROLE) can decrypt tokens
- **Automatic Refresh**: Expired tokens are refreshed and re-encrypted automatically
- **Token Sanitization**: Error messages automatically redact any token patterns

### Encryption Details
- Access tokens and refresh tokens stored as encrypted bytea
- Uses `pgp_sym_encrypt` with a secure encryption key
- Decryption only possible through SECURITY DEFINER functions
- Even database administrators cannot read tokens without the encryption key

## Architecture

```
Frontend (Client)
    ↓ 
    JWT Auth + Request
    ↓
Edge Function (gmail-proxy)
    ↓ 
    Service Role Access
    ↓
decrypt_gmail_token() ← SECURITY DEFINER Function
    ↓
gmail_integrations table
    ↓
    Encrypted Tokens (bytea)
    [access_token: pgp_sym_encrypt(...)]
    [refresh_token: pgp_sym_encrypt(...)]
    ↓
Decrypted in Memory (never persisted)
    ↓
Gmail API (with decrypted token)
```

### Security Flow
1. Frontend sends request with user JWT (never has tokens)
2. Edge Function verifies JWT and gets user ID
3. Service role queries encrypted tokens from database
4. Decryption function unlocks tokens (only in memory)
5. Gmail API called with decrypted token
6. Response returned to frontend (no tokens included)

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

Use the `get_gmail_integrations_safe()` RPC function to get non-sensitive metadata:

```typescript
// ✅ CORRECT: Use the secure RPC function
const { data, error } = await supabase
  .rpc('get_gmail_integrations_safe');

// ❌ NEVER: Do not query gmail_integrations directly (will fail due to RLS)
// ❌ NEVER: Do not attempt to access access_token or refresh_token columns
```

## Environment Variables Required

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

## Security Features

1. **🔐 Encrypted Storage**: Tokens encrypted at rest using pgcrypto (PGP)
2. **🛡️ Token Isolation**: OAuth tokens never leave the database unencrypted
3. **🔄 Automatic Refresh**: Expired tokens refreshed and re-encrypted transparently
4. **✅ User Authentication**: Validates JWT before processing any requests
5. **🔒 Service Role Access**: Only Edge Function can decrypt tokens via SECURITY DEFINER functions
6. **📝 Audit Logging**: All operations logged (tokens redacted from logs)
7. **🚫 Token Sanitization**: Error messages automatically strip token patterns

### Database Security Layers
- **Layer 1**: RLS policies block all direct SELECT queries
- **Layer 2**: Tokens stored as encrypted bytea, not plain text
- **Layer 3**: Decryption only via SECURITY DEFINER functions
- **Layer 4**: Service role authentication required for decryption