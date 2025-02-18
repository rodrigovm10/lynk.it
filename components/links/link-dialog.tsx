'use client'

import { useState } from 'react'
import { Tag } from '@/types/tags'
import { Rocket, Save } from 'lucide-react'

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
import { Lynk } from '@/types/lynk'
import { DialogDescription } from '@radix-ui/react-dialog'
import { TypographyP } from '../ui/typografy'

interface LinkDialogProps {
  lynk?: Lynk
  tags?: Tag[]
  title: string
  description?: string
  trigger: React.ReactNode
}

export function LinkDialog({ tags, trigger, title, description, lynk }: LinkDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription className='text-neutral-500 font-semibold'>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <LinkForm
          lynk={lynk}
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
                  loadingText={lynk ? 'Saving...' : 'Creating...'}
                  normalText={lynk ? 'Save' : 'Create a lynk'}
                  icon={lynk ? <Save /> : <Rocket />}
                />
              </Button>
            </DialogFooter>
          )}
        />
      </DialogContent>
    </Dialog>
  )
}
