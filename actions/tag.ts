'use server'

import { revalidatePath } from 'next/cache'
import { getAuthenticatedUser } from '@/utils/helpers'
import { createClient } from '@/utils/supabase/server'

export const addTag = async (name: string) => {
  const user = await getAuthenticatedUser()

  if (!user) return { success: false, error: 'User is not authenticated' }

  const supabase = await createClient()

  const { error } = await supabase.from('tags').insert([{ user_id: user.id, name }])

  if (error) return { success: false, error: error.message }

  revalidatePath('/dashboard/links', 'page')
  return { success: true }
}

export const retrieveTags = async () => {
  const user = await getAuthenticatedUser()

  if (!user) return { success: false, error: 'User is not authenticated' }

  const supabase = await createClient()

  const { data: tags, error } = await supabase.from('tags').select().eq('user_id', user.id)

  if (error) return { success: false, error: error.message }

  return { success: true, data: tags }
}

export const deleteTag = async (id: string) => {
  const user = await getAuthenticatedUser()

  if (!user) return { success: false, error: 'User is not authenticated' }

  const supabase = await createClient()

  const { error } = await supabase.from('tags').delete().eq('id', id)

  if (error) return { success: false, error: error.message }

  revalidatePath('/dashboard/links', 'page')
  return { success: true }
}
