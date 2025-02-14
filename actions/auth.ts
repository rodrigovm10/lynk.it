'use server'
import { redirect } from 'next/navigation'
import { Provider } from '@supabase/supabase-js'
import { createClient } from '@/utils/supabase/server'

const signInWith = async (provider: Provider) => {
  const supabase = await createClient()

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: auth_callback_url },
  })

  if (error) {
    console.error(error)
  }

  redirect(data.url!)
}

export const signInWithGoogle = async () => await signInWith('google')
export const signInWithGithub = async () => await signInWith('github')

export const signOut = async () => {
  const supabase = await createClient()
  await supabase.auth.signOut()
}
