import { Tag } from '@/types/tags'
import { getAuthenticatedUser } from '@/utils/helpers'
import { createClient } from '@/utils/supabase/server'

export const addTagLynk = async (tags: Tag[], lynkId: string) => {
  const user = await getAuthenticatedUser()

  if (!user) return { error: 'User is not authenticated' }

  const supabase = await createClient()

  const { error } = await supabase
    .from('lynk_tag')
    .insert(tags.map(tag => ({ lynk_id: lynkId, tag_id: tag!.id })))

  if (error) return { error: error.message }

  return { error: null }
}
