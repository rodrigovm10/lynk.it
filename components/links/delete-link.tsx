'use client'

import { Lynk } from '@/schemas'
import { Trash } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import React, { useState } from 'react'
import { useDelete } from '@/hooks/tags/useDelete'
import { deleteLynk } from '@/actions/lynk'
import { PendingAction } from '../ui/pending-action'

interface DeleteLinkProps {
  lynk: Lynk
}

export function DeleteLink({ lynk }: DeleteLinkProps) {
  const { handleDelete, isPending } = useDelete({
    entityName: 'Lynk',
    deleteFunction: deleteLynk,
  })

  const [isDisabled, setIsDisabled] = useState(true)

  const handleConfirmDelete = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (value !== lynk.lynk) {
      setIsDisabled(true)
      return
    }

    setIsDisabled(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    handleDelete(lynk.id!, lynk.lynk)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash
          size={16}
          className='transition-opacity hover:opacity-75 cursor-pointer'
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete /{lynk.lynk}</DialogTitle>
          <DialogDescription className='font-medium text-destructive'>
            Delete this lynk cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className='mt-1 space-y-3'
        >
          <Label className='font-semibold'>Type {lynk.lynk} to confirm</Label>
          <Input onChange={handleConfirmDelete} />
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type='button'
                variant='ghost'
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type='submit'
              disabled={isDisabled || isPending}
              variant='destructive'
            >
              <PendingAction
                isPending={isPending}
                loadingText='Deleting'
                normalText='Delete'
                icon={<Trash />}
              />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
