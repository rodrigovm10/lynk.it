'use client'

import { Button } from '@/components/ui/button'
import { PendingAction } from '@/components/ui/pending-action'
import { TypographyH1, TypographyP } from '@/components/ui/typografy'
import { RotateCw } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

interface ErrorBoundaryProps {
  error: Error
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  const [isPending, startTransition] = useTransition()

  const router = useRouter()
  const reload = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }

  return (
    <div className='grid justify-center items-center text-center gap-4 mt-8'>
      <section>
        <TypographyH1 className='tracking-wider font-mono'>Error</TypographyH1>
      </section>
      <section className='flex flex-col gap-4 max-w-[700px]'>
        <TypographyP className='text-base font-normal leading-10'>{error.message}</TypographyP>
        <Button
          onClick={reload}
          className='w-fit self-center'
          disabled={isPending}
        >
          <PendingAction
            loadingText='Trying again...'
            isPending={isPending}
            normalText='Try again'
            icon={<RotateCw size={18} />}
          />
        </Button>
      </section>
    </div>
  )
}
