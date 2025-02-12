'use server'

import { createClient } from '@/utils/supabase/client'

export const addLynk = async () => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { error } = await supabase.from('lynk').insert([])
}
