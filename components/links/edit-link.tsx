import { Lynk } from '@/types/lynk'
import { Pencil } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { TypographyP } from '@/components/ui/typografy'

interface EditLinkProps {
  lynk: Lynk
}

export function EditLink({ lynk }: EditLinkProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Pencil
          size={16}
          className='transition-opacity hover:opacity-75'
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit link</DialogTitle>
          <DialogDescription>
            <TypographyP>/{lynk.lynk}</TypographyP>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
