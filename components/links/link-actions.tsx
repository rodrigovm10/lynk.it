import { Tag } from '@/types/tags'
import { Plus } from 'lucide-react'

import { LinkDialog } from './link-dialog'
import { SearchLink } from './link-search'
import { Button } from '@/components/ui/button'
import { SelectTag } from '@/components/tags/select-tag'

interface LinkActionsProps {
  tags: Tag[]
}

export function LinkActions({ tags }: LinkActionsProps) {
  return (
    <section
      id='link-actions'
      className='flex justify-between gap-6 mt-4'
    >
      <SearchLink />
      <div className='flex gap-4'>
        <SelectTag />
        <LinkDialog
          title='Create new lynk'
          tags={tags}
          trigger={
            <Button>
              <Plus />
              <span className='hidden md:inline-block font-semibold'>Create link</span>
            </Button>
          }
        />
      </div>
    </section>
  )
}
