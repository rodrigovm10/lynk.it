'use server'

import { createClient } from '@/utils/supabase/server'
import { Provider } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const signInWith = async (provider: Provider) => {
  const supabase = await createClient()

  const auth_callback_url = `${process.env.SITE_URL}/auth/callback`

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: auth_callback_url },
  })

  console.log(data)

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

// export const signInWithGithub = async () => await signInWith('github')

// export const signOut = async () => {
//   const supabase = await createClient()
//   await supabase.auth.signOut()
// }

// export const signupWithEmailPassword = async (
//   prevState: { error: null | string; success: null | string },
//   formData: FormData
// ) => {
//   const supabase = await createClient()

//   const { data, error } = await supabase.auth.signUp({
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   })

//   if (error) {
//     console.log({ error })
//     return { success: null, error: error.message }
//   }

//   return { success: 'Please check your email', error: null }
// }

// export const signInWithEmailPassword = async (
//   prevState: { error: null | string; success: null | string },
//   formData: FormData
// ) => {
//   const supabase = await createClient()

//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   })

//   if (error) {
//     return { success: null, error: error.message }
//   }

//   return { success: 'Signed in', error: null }
// }
