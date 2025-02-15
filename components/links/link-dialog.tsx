'use client'

import { useState } from 'react'
import { Tag } from '@/types/tags'
import { Plus, Rocket } from 'lucide-react'

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { LinkForm } from './link-form'
import { Button } from '@/components/ui/button'
import { PendingAction } from '@/components/ui/pending-action'

interface LinkDialogProps {
  tags: Tag[]
}

export function LinkDialog({ tags }: LinkDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus />
          <span className='hidden md:inline-block font-semibold'>Create link</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new lynk</DialogTitle>
        </DialogHeader>
        <LinkForm
          tags={tags}
          onSuccess={() => setOpen(false)}
          actions={isPending => (
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type='button'
                  variant='ghost'
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type='submit'>
                <PendingAction
                  isPending={isPending}
                  loadingText='Creating...'
                  normalText='Create a lynk'
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
