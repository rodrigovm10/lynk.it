import { Logo } from './logo'
import { NavbarLinks } from './navbar-links'

export function Navbar() {
  return (
    <nav className=' flex justify-between items-center px-4 py-2 border-b-[1px]'>
      <Logo />
      <NavbarLinks />
    </nav>
  )
}
