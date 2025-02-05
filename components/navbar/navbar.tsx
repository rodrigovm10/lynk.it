'use client'

import { usePathname } from 'next/navigation'
import { Logo } from './logo'
import { NavbarLinks } from './navbar-links'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        'flex justify-between items-center px-4 py-2 ',
        pathname.includes('dashboard') ? 'border-none' : 'border-b-[1px]'
      )}
    >
      <Logo />
      <NavbarLinks />
    </nav>
  )
}
