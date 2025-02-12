import Link from 'next/link'
import { Link2, Settings } from 'lucide-react'

import { NavbarItem } from './navbar-item'

export function Navbar() {
  return (
    <nav className='pt-3 border-b-[1px] w-full'>
      <ul className='flex gap-6 container'>
        <NavbarItem path='links'>
          <Link
            href='/dashboard/links'
            className='flex items-center gap-2'
          >
            <Link2
              size={18}
              className='group-hover:duration-500 group-hover:rotate-12'
            />
            <span>Links</span>
          </Link>
        </NavbarItem>
        <NavbarItem path='settings'>
          <Link
            href='/dashboard/settings'
            className='flex items-center gap-2 '
          >
            <Settings
              size={18}
              className='group-hover:duration-500 group-hover:rotate-12'
            />
            <span>Settings</span>
          </Link>
        </NavbarItem>
      </ul>
    </nav>
  )
}
