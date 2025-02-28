'use client'

import { Tables } from '@/types'
import { XIcon } from 'lucide-react'
import { deleteTag } from '@/actions/tag'
import { useDelete } from '@/hooks/tags/useDelete'

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
import { PendingAction } from '@/components/ui/pending-action'

interface DeleteTagProps {
  tag: Tables<'tags'>
}

export function DeleteTag({ tag }: DeleteTagProps) {
  const { isPending, handleDelete } = useDelete({
    entityName: 'Tag',
    deleteFunction: deleteTag,
  })

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
            onClick={() => handleDelete(tag.id, tag.name)}
            disabled={isPending}
          >
            <PendingAction
              isPending={isPending}
              loadingText='Deleting...'
              normalText='Delete tag'
            />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
