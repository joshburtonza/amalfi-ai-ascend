-- Remove the gmail_integrations_safe view to eliminate SECURITY DEFINER view warning
-- Clients will call get_gmail_integrations_safe() function directly via RPC instead

DROP VIEW IF EXISTS public.gmail_integrations_safe;

-- The secure function get_gmail_integrations_safe() remains unchanged and is the recommended way to access Gmail integration metadata