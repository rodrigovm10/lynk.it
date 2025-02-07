import { cn } from '@/lib/utils'
import { createClient } from '@/utils/supabase/server'

import { Logo } from './logo'
import { NavbarLinks } from './navbar-links'

export async function Navbar() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()

  return (
    <nav className={cn('flex justify-between items-center px-4 py-2')}>
      <Logo />
      <NavbarLinks user={data.user} />
    </nav>
  )
}
