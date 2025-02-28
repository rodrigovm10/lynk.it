'use client'

import { HeartCrack, Loader } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { deleteAccount } from '@/actions/user'
import { useTransition } from 'react'
import { toast } from 'sonner'

interface DeleteAccountProps {
  id: string | undefined
}

export function DeleteAccount({ id }: DeleteAccountProps) {
  const [isPending, startTransition] = useTransition()

  const handleDeleteAccount = () => {
    startTransition(async () => {
      try {
        const { success, error } = await deleteAccount(id!)

        if (error) {
          toast.error(error)
          console.log(error)
          return
        }

        toast.success(success)
      } catch (error) {
        toast.error('Something went wrong, please try again.')
      }
    })
  }

  return (
    <Button
      variant='destructive'
      className='px-4'
      onClick={handleDeleteAccount}
      disabled={isPending}
    >
      {isPending ? <Loader className='animate-spin' /> : <HeartCrack />}

      <span>{isPending ? 'Deleting...' : 'Delete account'}</span>
    </Button>
  )
}
