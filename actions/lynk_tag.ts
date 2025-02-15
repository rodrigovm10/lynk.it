import { getAuthenticatedUser } from '@/utils/helpers'
import { createClient } from '@/utils/supabase/server'

export const addTagLynk = async () => {
  const user = await getAuthenticatedUser()

  if (!user) return { success: false, error: 'User is not authenticated' }

  const supabase = await createClient()
}
