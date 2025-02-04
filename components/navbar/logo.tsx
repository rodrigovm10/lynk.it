import Link from 'next/link'
import Image from 'next/image'

import logo from '@/public/logo.png'

export function Logo() {
  return (
    <Link
      href='/'
      className='flex items-center gap-x-2'
    >
      <Image
        src={logo}
        alt='lynk.it logo'
        width={32}
        height={32}
        quality={100}
      />
      <h3 className='font-semibold'>lynk.it</h3>
    </Link>
  )
}
