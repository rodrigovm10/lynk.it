import Link from 'next/link'
import { Link as LinkIcon } from 'lucide-react'

import { GithubLogo } from '@/components/icons/icons'
import { ExternalLink } from '@/components/ui/external-link'
import { Button, buttonVariants } from '@/components/ui/button'

export function HeroActions() {
  return (
    <section className='flex gap-x-5 mt-8'>
      <Button
        asChild
        variant='outline'
        size='lg'
        className='font-semibold'
      >
        <Link href='/login'>
          <LinkIcon />
          <span>Create link</span>
        </Link>
      </Button>
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
