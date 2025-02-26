import Link from 'next/link'
import { Link as LinkIcon } from 'lucide-react'

import { GithubLogo } from '@/components/icons/icons'
import { ExternalLink } from '@/components/ui/external-link'
import { buttonVariants } from '@/components/ui/button'

export function HeroActions() {
  return (
    <section className='flex justify-center gap-x-5 mt-8'>
      <Link
        href='/login'
        className={buttonVariants({
          variant: 'outline',
          size: 'lg',
          className: 'font-semibold',
        })}
      >
        <LinkIcon />
        <span>Create link</span>
      </Link>

      <ExternalLink
        href='https://github.com/rodrigovm10/lynk.it'
        className={buttonVariants({
          variant: 'default',
          size: 'lg',
          className: 'font-semibold',
        })}
      >
        <GithubLogo />
        <span>Star on Github</span>
      </ExternalLink>
    </section>
  )
}
