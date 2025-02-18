'use client'

import { useState } from 'react'
import { Plus, Rocket } from 'lucide-react'

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
import { PendingAction } from '@/components/ui/pending-action'
import { TypographyP } from '../ui/typografy'

export function TagDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          className='w-full'
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
          <DialogDescription className='text-neutral-500 font-semibold'>
            Create a new tag to organize your links.
          </DialogDescription>
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
                <PendingAction
                  isPending={isPending}
                  loadingText='Creating...'
                  normalText='Create a tag'
                  icon={<Rocket />}
                />
              </Button>
            </DialogFooter>
          )}
        />
      </DialogContent>
    </Dialog>
  )
}
