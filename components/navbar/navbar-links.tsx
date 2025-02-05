import { buttonVariants } from '../ui/button'

import { NavbarItem } from './navbar-item'
import { GetStarted } from './get-started'
import { GithubLogo } from '../icons/icons'
import { ExternalLink } from '../ui/external-link'
import { ThemeToggle } from '../theme/theme-toggle'

export function NavbarLinks() {
  return (
    <ul className='flex gap-x-2 items-center'>
      <NavbarItem>
        <ExternalLink
          href='https://github.com/rodrigovm10/lynk.it'
          className={buttonVariants({
            variant: 'ghost',
            size: 'icon',
          })}
        >
          <GithubLogo width={20} />
        </ExternalLink>
      </NavbarItem>
      <NavbarItem>
        <ThemeToggle />
      </NavbarItem>
      <NavbarItem>
        <GetStarted />
      </NavbarItem>
    </ul>
  )
}
