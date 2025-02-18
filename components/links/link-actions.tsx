import { Plus } from 'lucide-react'
import { retrieveTags } from '@/actions/tag'

import { LinkDialog } from './link-dialog'
import { SearchLink } from './link-search'
import { Button } from '@/components/ui/button'
import { SelectTag } from '@/components/tags/select-tag'

export async function LinkActions() {
  const { data } = await retrieveTags()

  return (
    <section className='flex justify-between gap-6 mt-4'>
      <SearchLink />
      <div className='flex gap-4'>
        <SelectTag />
        <LinkDialog
          title='Create new lynk'
          tags={data!}
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
