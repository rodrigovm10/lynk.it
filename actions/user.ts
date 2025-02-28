'use server'

import { createClient } from '@supabase/supabase-js'
import { getAuthenticatedUser, revalidate } from '@/utils/helpers'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
export const deleteAccount = async (id: string) => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const { error } = await supabase.auth.admin.deleteUser(id)

  if (error) return { error: error.message }

  revalidate('/', 'layout')
  return { success: 'Your account was deleted', error: null }
}
