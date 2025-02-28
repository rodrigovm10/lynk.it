import { cn } from '@/lib/utils'
import { createClient } from '@/utils/supabase/server'

import { Logo } from './logo'
import { NavbarLinks } from './navbar-links'

export async function Navbar() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()

  return (
    <nav className={cn('flex justify-between items-center w-full py-2 backdrop-blur-md container')}>
      <Logo />
      <NavbarLinks user={data.user} />
    </nav>
  )
}
