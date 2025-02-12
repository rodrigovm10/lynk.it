import { SearchX, Tag, XIcon } from 'lucide-react'

import { TagDialog } from './tag-dialog'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function SelectTag() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>
          <Tag />
          <span className='hidden md:inline-block font-semibold'>Select tag</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className='my-2 text-center text-sm font-medium'>My Tags</p>
        <div className='mb-2 flex w-full flex-col space-y-1'>
          <div className='flex w-full items-center justify-between rounded-md border border-neutral-200 px-2 py-1 text-left text-sm transition-colors duration-200 hover:opacity-80 dark:border-neutral-800'>
            <button className='w-full text-start'>a </button>
            <div className='flex items-center space-x-2'>
              {/* {tag.id === props.tagSelected && <CheckIcon size={16} />} */}
              {/* <DeleteTag
              tag={tag}
              trigger={
                <button className='rounded-md p-1 hover:opacity-80'>
                  <XIcon size={16} />
                </button>
              }
            /> */}
              <button className='rounded-md p-1 hover:opacity-80'>
                <XIcon size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-center gap-2 mt-4 w-full '>
          <Button
            className='w-full'
            variant='outline'
            size='sm'
          >
            <SearchX />
            Clean Search
          </Button>

          <TagDialog />
        </div>
      </PopoverContent>
    </Popover>
  )
}
