'use server'

import { createClient } from '@/utils/supabase/server'
import { checkIfExists, getAuthenticatedUser, revalidate } from '@/utils/helpers'

export const addTag = async (name: string) => {
  const user = await getAuthenticatedUser()
  if (!user) return { error: 'User is not authenticated' }

  const supabase = await createClient()

  const { error } = await supabase.from('tags').insert([{ user_id: user.id, name }])

  if (error) return { error: error.message }

  revalidate()
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

  const exists = await checkIfExists({ database: 'tags', column: 'id', value: id })
  if (!exists) return { error: 'Tag not found' }

  const supabase = await createClient()

  const { error } = await supabase.from('tags').delete().eq('id', id)

  if (error) return { error: error.message }

  revalidate()
  return { error: null }
}

export const retrieveTagById = async (id: string) => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const exists = await checkIfExists({ database: 'tags', column: 'id', value: id })
  if (!exists) return { error: 'Tag not found' }

  const supabase = await createClient()

  const { data: tag, error } = await supabase.from('tags').select().eq('id', id).single()

  if (error) return { error: error.message }

  return { data: tag }
}
