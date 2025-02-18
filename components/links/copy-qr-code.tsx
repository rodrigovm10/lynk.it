import QRCode from 'react-qr-code'
import { Lynk } from '@/types/lynk'
import { LYNK_TO_COPY } from '@/constants'

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { TypographyP } from '@/components/ui/typografy'

interface CopyQRCodeProps {
  lynk: Lynk
}

export function CopyQRCode({ lynk }: CopyQRCodeProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Copy QR Code</DialogTitle>
        <DialogDescription>
          <TypographyP>{lynk.description}</TypographyP>
        </DialogDescription>
      </DialogHeader>
      <div className='my-3 flex flex-col items-center justify-center space-y-3 overflow-hidden'>
        <div className='rounded-lg border border-neutral-100 p-2 shadow-md dark:border-neutral-800'>
          <QRCode
            id='qr-code'
            size={128}
            style={{ height: 'auto' }}
            value={LYNK_TO_COPY(lynk)}
            viewBox={`0 0 128 128`}
          />
        </div>
        <p className='block w-full truncate text-center font-medium'>{`/${lynk.lynk}`}</p>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button
            variant={'outline'}
            type='button'
          >
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}
