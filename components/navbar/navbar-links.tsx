import { User } from '@supabase/supabase-js'
import { buttonVariants } from '../ui/button'

import { NavbarItem } from './navbar-item'
import { GetStarted } from './get-started'
import { UserAvatar } from './user-avatar'
import { GithubLogo } from '../icons/icons'
import { ThemeToggle } from '../theme/theme-toggle'
import { ExternalLink } from '../ui/external-link'

interface NavbarLinksProps {
  user: User | null
}

export function NavbarLinks({ user }: NavbarLinksProps) {
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
      <NavbarItem>{!user ? <GetStarted /> : <UserAvatar user={user} />}</NavbarItem>
    </ul>
  )
}
