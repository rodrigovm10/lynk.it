'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

interface ErrorBoundaryProps {
  error: Error
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  const router = useRouter()
  const reload = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }

  return (
    <div>
      <p>{error.message}</p>
      <Button onClick={reload}>Try again</Button>
    </div>
  )
}
