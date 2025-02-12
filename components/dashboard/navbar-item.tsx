'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

interface NavbarItemProps {
  path: string
  children: React.ReactNode
}

export function NavbarItem({ path, children }: NavbarItemProps) {
  const pathname = usePathname()

  return (
    <li
      className={cn(
        pathname.includes(path) && 'font-semibold border-b border-b-primary pb-4',
        'group'
      )}
    >
      {children}
    </li>
  )
}
