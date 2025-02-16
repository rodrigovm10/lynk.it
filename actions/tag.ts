'use server'

import { revalidatePath } from 'next/cache'
import { getAuthenticatedUser } from '@/utils/helpers'
import { createClient } from '@/utils/supabase/server'

export const addTag = async (name: string) => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const supabase = await createClient()

  const { error } = await supabase.from('tags').insert([{ user_id: user.id, name }])

  if (error) return { error: error.message }

  revalidatePath('/dashboard/links', 'page')
  return { error: null }
}

export const retrieveTags = async () => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const supabase = await createClient()

  const { data: tags, error } = await supabase.from('tags').select().eq('user_id', user.id)

  if (error) return { error: error.message }

  return { data: tags }
}

export const deleteTag = async (id: string) => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const supabase = await createClient()

  const { error } = await supabase.from('tags').delete().eq('id', id)

  if (error) return { error: error.message }

  revalidatePath('/dashboard/links', 'page')
  return { error: null }
}

export const retrieveTagById = async (id: string) => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const supabase = await createClient()

  const { data: tag, error } = await supabase.from('tags').select().eq('id', id).single()

  if (error) return { error: error.message }

  return { data: tag }
}
