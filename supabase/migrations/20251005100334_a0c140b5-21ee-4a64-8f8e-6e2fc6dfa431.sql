-- Drop the existing SELECT policy that exposes tokens
DROP POLICY IF EXISTS "Users can view their own Gmail integrations" ON public.gmail_integrations;

-- Create a secure view that excludes sensitive token data
CREATE OR REPLACE VIEW public.gmail_integrations_safe AS
SELECT 
  id,
  user_id,
  gmail_email,
  token_expires_at,
  watch_expiration,
  is_active,
  created_at,
  updated_at,
  history_id
FROM public.gmail_integrations;

-- Grant SELECT on the safe view to authenticated users
GRANT SELECT ON public.gmail_integrations_safe TO authenticated;

-- Create RLS policy for the safe view
ALTER VIEW public.gmail_integrations_safe SET (security_invoker = on);

-- Important: We intentionally do NOT create a SELECT policy on gmail_integrations
-- This prevents users from querying the table directly and accessing tokens
-- Users must use the gmail_integrations_safe view instead

-- Add a comment to document the security measure
COMMENT ON TABLE public.gmail_integrations IS 'OAuth tokens (access_token, refresh_token) must NEVER be exposed to clients. All Gmail API operations must go through Edge Functions using service role. Use gmail_integrations_safe view for safe metadata access.';

-- Create a function to safely check if a user has a Gmail integration
CREATE OR REPLACE FUNCTION public.has_gmail_integration(user_uuid uuid DEFAULT auth.uid())
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.gmail_integrations 
    WHERE user_id = user_uuid 
    AND is_active = true
  );
$$;

-- Grant execute permission
GRANT EXECUTE ON FUNCTION public.has_gmail_integration TO authenticated;