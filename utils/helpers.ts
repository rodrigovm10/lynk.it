import { createClient } from './supabase/server'

export const getAuthenticatedUser = async () => {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) return null

  return user
}
