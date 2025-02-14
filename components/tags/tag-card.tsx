import { Tag } from '@/types/tags'
import { XIcon } from 'lucide-react'

interface TagCardProps {
  tag: Tag
}

export function TagCard({ tag }: TagCardProps) {
  return (
    <div className='flex w-full items-center justify-between rounded-md border border-neutral-200 px-2 py-1 text-left text-sm transition-colors duration-200 hover:opacity-80 dark:border-neutral-800'>
      <button className='w-full text-start'>{tag.name} </button>
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
  )
}
