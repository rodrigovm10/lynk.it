'use server'

import { Lynk } from '@/schemas'
import { Tag } from '@/types/tags'
import { retrieveTagById } from './tag'
import { addTagLynk } from './tag-lynk'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'
import { getAuthenticatedUser } from '@/utils/helpers'

export const addLynk = async (lynk: Lynk) => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const supabase = await createClient()

  const tags = await Promise.all(
    lynk.tags?.map(async tag => {
      const { data, error } = await retrieveTagById(tag.id)
      if (data) return data
    }) || []
  )

  const { data: lynkCreated, error: lynkError } = await supabase
    .from('lynks')
    .insert({ link: lynk.link, description: lynk.description, user_id: user.id, lynk: lynk.lynk })
    .select()
    .single()

  if (lynkError) return { error: lynkError.message }

  const validTags = tags.filter(tag => tag !== undefined) as Tag[]
  const { error: tagLynkError } = await addTagLynk(validTags, lynkCreated.id)

  if (tagLynkError) return { error: tagLynkError }

  revalidatePath('/dashboard/links', 'page')
  return { data: lynkCreated, error: null }
}

export const editLynk = async (lynk: Lynk) => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const supabase = await createClient()

  const { id, ...lynkToUpdate } = lynk

  const { data, error } = await supabase
    .from('lynks')
    .update({ ...lynkToUpdate })
    .eq('id', id!)
    .select()
    .single()

  if (error) return { error: error.message }

  revalidatePath('/dashboard/links', 'page')
  return { data, error: null }
}

export const deleteLynk = async (id: string) => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const supabase = await createClient()

  const { error } = await supabase.from('lynks').delete().eq('id', id)

  if (error) return { error: error.message }

  revalidatePath('/dashboard/links', 'page')
  return { error: null }
}

export const retrieveLynks = async () => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const supabase = await createClient()

  const { data, error } = await supabase.from('lynks').select().eq('user_id', user.id)

  if (error) return { error: error.message }

  return { data }
}
