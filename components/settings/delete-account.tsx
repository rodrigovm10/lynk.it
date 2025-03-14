'use client'

import { toast } from 'sonner'
import { useTransition } from 'react'
import { HeartCrack } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { deleteAccount } from '@/actions/user'

import { Button } from '@/components/ui/button'
import { TypographyP } from '@/components/ui/typografy'
import { PendingAction } from '@/components/ui/pending-action'

interface DeleteAccountProps {
  id: string | undefined
}

export function DeleteAccount({ id }: DeleteAccountProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleDeleteAccount = () => {
    startTransition(async () => {
      try {
        const { success, error } = await deleteAccount(id!)

        if (error) {
          toast.error(error)
          return
        }
        router.push('/')
        toast.success(success)
      } catch (error) {
        toast.error('Something went wrong, please try again.')
      }
    })
  }

  return (
    <section className='m-0'>
      <TypographyP>Delete Account:</TypographyP>
      <Button
        variant='destructive'
        className='px-4'
        onClick={handleDeleteAccount}
        disabled={isPending}
      >
        <PendingAction
          isPending={isPending}
          loadingText='Deleting...'
          normalText='Delete account'
          icon={<HeartCrack />}
        />
      </Button>
    </section>
  )
}
