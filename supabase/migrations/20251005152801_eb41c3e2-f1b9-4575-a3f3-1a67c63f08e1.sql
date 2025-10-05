-- Drop the overly restrictive SELECT policy
DROP POLICY IF EXISTS "No one can select Gmail tokens" ON public.gmail_integrations;

-- Create a proper SELECT policy that allows users to view their own integrations
-- The encrypted tokens (bytea) are useless without the decryption key, so it's safe to allow SELECT
CREATE POLICY "Users can view their own Gmail integrations"
ON public.gmail_integrations
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Add helpful comment explaining the security model
COMMENT ON POLICY "Users can view their own Gmail integrations" ON public.gmail_integrations IS 
'Users can SELECT their own integration rows. The access_token and refresh_token columns contain encrypted binary data (bytea) that can only be decrypted via the decrypt_gmail_token() SECURITY DEFINER function, which requires service role access. Raw encrypted data is useless to attackers without the encryption key.';