import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Home } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typografy'

export default function NotFound() {
  return (
    <div className='grid justify-center items-center text-center gap-4 mt-8'>
      <section className='space-y-4'>
        <TypographyH1 className='text-6xl font-mono tracking-wider'>404</TypographyH1>
        <TypographyH2>Page Not Found</TypographyH2>
      </section>
      <section className='flex flex-col gap-4'>
        <TypographyP className='text-base text-neutral-500 font-normal leading-10'>
          The page you're looking for doesn't exist on lynk.it
        </TypographyP>
        <Link
          href='/'
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg', className: 'py-2 w-auto' })
          )}
        >
          <Home />
          <span>Go back home</span>
        </Link>
      </section>
    </div>
  )
}
