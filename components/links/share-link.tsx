'use client'

import { toast } from 'sonner'
import { Lynk } from '@/types/lynk'
import { LYNK_TO_COPY } from '@/constants'
import { Clipboard, CopyIcon, QrCodeIcon, Settings } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CopyQRCode } from './copy-qr-code'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

interface ShareLinkProps {
  lynk: Lynk
}

export function ShareLink({ lynk }: ShareLinkProps) {
  const handleCopyToClipboard = async () => {
    if (!navigator.clipboard) {
      toast.error("Browser don't have support for native clipboard.")
      return
    }

    await navigator.clipboard.writeText(LYNK_TO_COPY(lynk))
    toast.success('Link copied to clipboard.', {
      description: LYNK_TO_COPY(lynk),
    })
  }

  return (
    <section>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger className='transition-opacity hover:opacity-75'>
            <CopyIcon size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleCopyToClipboard}>
              <Clipboard />
              <span>Copy to clipboard</span>
            </DropdownMenuItem>
            <DialogTrigger>
              <DropdownMenuItem>
                <QrCodeIcon />
                <span>Copy QR Code</span>
              </DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
        <CopyQRCode lynk={lynk} />
      </Dialog>
      <Settings />
    </section>
  )
}
