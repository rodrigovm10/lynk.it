'use server'

import { getAuthenticatedUser, revalidate } from '@/utils/helpers'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Server-side only!
)
export const deleteAccount = async (id: string) => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const { error } = await supabase.auth.admin.deleteUser(id)

  if (error) return { error: error.message }

  console.log(id)

  revalidate('/', 'layout')
  return { success: 'Your account was deleted', error: null }
}
