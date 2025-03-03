'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  href: string
  children: ReactNode
  className?: string
}

export const ExternalLink = (props: Props) => {
  return (
    <a
      href={props.href}
      rel='noreferrer'
      target='_blank'
      className={cn(props.className)}
    >
      {props.children}
    </a>
  )
}
