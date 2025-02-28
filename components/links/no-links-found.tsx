import { Tag } from '@/types/tags'
import { Plus, Stars } from 'lucide-react'

import { LinkDialog } from './link-dialog'
import { Button } from '@/components/ui/button'
import { TypographyH3 } from '@/components/ui/typografy'

interface NoLinksFoundProps {
  tags: Tag[]
}

export function NoLinksFound({ tags }: NoLinksFoundProps) {
  return (
    <div className='flex flex-col justify-center items-center gap-4 '>
      <Stars size={30} />
      <TypographyH3>No links found</TypographyH3>
      <LinkDialog
        title='Create new lynk'
        tags={tags}
        trigger={
          <Button variant='outline'>
            <Plus />
            <span className='font-semibold'>Create a new link</span>
          </Button>
        }
      />
    </div>
  )
}
