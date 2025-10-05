-- Harden gmail_integrations and expose safe metadata via a SECURITY DEFINER function

-- 1) Explicitly deny any direct SELECT on gmail_integrations (tokens never readable to clients)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'gmail_integrations' AND policyname = 'No one can select Gmail tokens'
  ) THEN
    CREATE POLICY "No one can select Gmail tokens"
    ON public.gmail_integrations
    FOR SELECT
    TO authenticated
    USING (false);
  END IF;
END $$;

-- 2) Create a SECURITY DEFINER function that safely returns only non-sensitive metadata for the current user
CREATE OR REPLACE FUNCTION public.get_gmail_integrations_safe()
RETURNS TABLE (
  id uuid,
  user_id uuid,
  gmail_email text,
  token_expires_at timestamp with time zone,
  watch_expiration timestamp with time zone,
  is_active boolean,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  history_id text
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    gi.id,
    gi.user_id,
    gi.gmail_email,
    gi.token_expires_at,
    gi.watch_expiration,
    gi.is_active,
    gi.created_at,
    gi.updated_at,
    gi.history_id
  FROM public.gmail_integrations gi
  WHERE gi.user_id = auth.uid();
$$;

-- 3) Recreate the view to use the secure function (ensures safe, per-user rows only)
DROP VIEW IF EXISTS public.gmail_integrations_safe;
CREATE VIEW public.gmail_integrations_safe AS
SELECT * FROM public.get_gmail_integrations_safe();
