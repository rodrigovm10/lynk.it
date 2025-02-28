import { revalidatePath } from 'next/cache'
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

interface CheckIfExists {
  database: 'lynk_tag' | 'lynks' | 'tags'
  column: string
  value: string | number
}

export const checkIfExists = async ({ database, column, value }: CheckIfExists) => {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from(database)
    .select('id')
    .eq(column, value)
    .select()
    .single()

  if (error || !data) return false

  return true
}

export const revalidate = (path = '/dashboard/links', type: 'page' | 'layout' = 'page') =>
  revalidatePath(path, type)
