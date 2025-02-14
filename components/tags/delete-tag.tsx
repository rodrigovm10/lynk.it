'use client'

import { Tag } from '@/types/tags'
import { Loader, XIcon } from 'lucide-react'
import { deleteTag } from '@/actions/tag'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { toast } from 'sonner'

interface DeleteTagProps {
  tag: Tag
}

export function DeleteTag({ tag }: DeleteTagProps) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = async () => {
    startTransition(async () => {
      try {
        const { id, name } = tag
        const { success, error } = await deleteTag(id)

        if (!success) {
          toast.error(error)
          return
        }
        toast.success('Tag deleted successfully.', {
          description: `The tag "${name}" has been deleted.`,
        })
      } catch (error) {
        toast.error('Something went wrong, please try again.')
        console.log(error)
      }
    })
  }
  return (
    <Dialog>
      <DialogTrigger>
        <XIcon size={16} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete "{tag.name}" tag</DialogTitle>
          <DialogDescription>
            Delete the tag will not delete the links associated with it.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant='destructive'
            onClick={handleDelete}
          >
            {isPending && <Loader className='animate-spin' />}
            {isPending ? 'Deleting...' : 'Delete tag'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
