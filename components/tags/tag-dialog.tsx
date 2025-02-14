'use client'

import { useState } from 'react'
import { Loader, Plus, Rocket } from 'lucide-react'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogFooter,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog'
import { TagForm } from './tag-form'
import { Button } from '@/components/ui/button'

export function TagDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          className='w-full cursor-pointer'
          variant='outline'
          size='sm'
        >
          <Plus />
          Create Tag
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new tag</DialogTitle>
          <DialogDescription>Create a new tag to organize your links.</DialogDescription>
        </DialogHeader>
        <TagForm
          onSuccess={() => setOpen(false)}
          actions={isPending => (
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type='button'
                  variant='ghost'
                >
                  Close
                </Button>
              </DialogClose>
              <Button
                type='submit'
                disabled={isPending}
              >
                {isPending ? <Loader className='animate-spin' /> : <Rocket />}
                {isPending ? 'Creating...' : 'Create a tag'}
              </Button>
            </DialogFooter>
          )}
        />
      </DialogContent>
    </Dialog>
  )
}
