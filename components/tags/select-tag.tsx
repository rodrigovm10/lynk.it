import { retrieveTags } from '@/actions/tag'
import { SearchX, Tag } from 'lucide-react'

import { TagList } from './tag-list'
import { TagDialog } from './tag-dialog'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { NotFoundTags } from './not-found-tags'
import { toast } from 'sonner'

export async function SelectTag() {
  const { data: tags = [], error } = await retrieveTags()

  if (error) {
    toast.error(error)
    return
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>
          <Tag />
          <span className='hidden md:inline-block font-semibold'>Select tag</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className='my-2 text-center text-sm font-medium'>My Tags ({tags?.length})</p>

        {tags.length === 0 && <NotFoundTags />}
        {tags.length > 0 && <TagList tags={tags} />}

        <section className='flex justify-center gap-2 mt-4 w-full '>
          <Button
            className='w-full'
            variant='outline'
            size='sm'
          >
            <SearchX />
            Clean Search
          </Button>

          <TagDialog />
        </section>
      </PopoverContent>
    </Popover>
  )
}
