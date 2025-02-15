'use server'

import { Lynk } from '@/schemas'
import { revalidatePath } from 'next/cache'
import { getAuthenticatedUser } from '@/utils/helpers'
import { createClient } from '@/utils/supabase/server'
import { retrieveTagById } from './tag'

export const addLynk = async (lynk: Lynk) => {
  const user = await getAuthenticatedUser()

  if (!user) return { success: false, error: 'User is not authenticated' }

  const supabase = await createClient()

  const tags = await Promise.all(
    lynk.tags?.map(async tag => {
      const { success, data } = await retrieveTagById(tag.id)
      if (!success) return data
    }) || []
  )

  console.log(tags)

  const { data, error } = await supabase
    .from('lynks')
    .insert([{ ...lynk, user_id: user.id }])
    .select()
    .single()

  if (error) return { success: false, error: error.message }

  console.log(data)
  console.log(error)

  revalidatePath('/dashboard/links', 'page')
  return { success: true }
}
