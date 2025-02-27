'use server'

import { createClient } from './supabase/server'

interface RedirectUrl {
  error: boolean
  message: string
  redirect404?: boolean
  url?: string
}

export const redirectUrl = async (lynk: string): Promise<RedirectUrl> => {
  try {
    const supabase = await createClient()

    const { data: lynkToRedirect } = await supabase
      .from('lynks')
      .select('link')
      .eq('lynk', lynk)
      .single()

    if (!lynkToRedirect) {
      return { error: true, message: 'Lynk not found', redirect404: true }
    }

    await supabase
      .from('lynks')
      .update({ total_clicks: lynkToRedirect.total_clicks + 1 })
      .eq('id', lynkToRedirect.id)

    await supabase.from('lynks').update({ last_click: new Date() }).eq('id', lynkToRedirect.id)

    return { error: false, message: 'Success', url: lynkToRedirect.link }
  } catch (error) {
    console.error('Error lynk: ', error)
    return {
      error: true,
      message: 'Something went wrong.',
    }
  }
}
