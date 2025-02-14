'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export const addTag = async (name: string) => {
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return { success: false, error: 'User is not authenticated' }
  }

  const { error } = await supabase
    .from('tags')
    .insert([{ user_id: user.id, name }])
    .select()
    .single()

  if (error) return { success: false, error: error.message }

  revalidatePath('/dashboard/links', 'page')
  return { success: true }
}

export const retrieveTags = async () => {
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return { success: false, error: 'User is not authenticated' }
  }

  const { data: tags, error } = await supabase.from('tags').select().eq('user_id', user.id)

  if (error) return { success: false, error: error.message }

  return { success: true, data: tags }
}

export const deleteTag = async (id: string) => {
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return { success: false, error: 'User is not authenticated' }
  }

  const { error } = await supabase.from('tags').delete().eq('id', id)

  if (error) return { success: false, error: error.message }

  revalidatePath('/dashboard/links', 'page')
  return { success: true }
}
