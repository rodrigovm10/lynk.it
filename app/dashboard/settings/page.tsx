import { createClient } from '@/utils/supabase/server'

import { AccountCard } from '@/components/settings/account-card'
import { GeneralCard } from '@/components/settings/general-card'

export default async function Settings() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className='flex w-full flex-col space-y-4 duration-500 animate-in fade-in-5 slide-in-from-bottom-2'>
      <GeneralCard user={user} />
      <AccountCard />
    </div>
  )
}
