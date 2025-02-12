import { Plus } from 'lucide-react'

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
  return (
    <Dialog>
      <DialogTrigger className='cursor-pointer'>
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
          actions={
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type='button'
                  variant='ghost'
                >
                  Close
                </Button>
              </DialogClose>
              <Button type='submit'>Create Tag</Button>
            </DialogFooter>
          }
        />
      </DialogContent>
    </Dialog>
  )
}
