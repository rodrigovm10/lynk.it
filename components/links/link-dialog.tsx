import { Plus } from 'lucide-react'

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

export function LinkDialog() {
  return (
    <Dialog>
      <DialogTrigger>
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
          actions={
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type='button'
                  variant='ghost'
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type='submit'>Create lynk</Button>
            </DialogFooter>
          }
        />
      </DialogContent>
    </Dialog>
  )
}
