import { Link2, Settings } from 'lucide-react'
import Link from 'next/link'
import { NavbarItem } from './navbar-item'

export function Navbar() {
  return (
    <nav className='px-4 pt-3 border-b-[1px]'>
      <ul className='flex gap-6'>
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
