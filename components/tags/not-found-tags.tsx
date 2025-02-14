import { TagIcon } from 'lucide-react'

export function NotFoundTags() {
  return (
    <div className='flex flex-col justify-center items-center my-4'>
      <TagIcon
        className='text-neutral-500 self-center'
        size={22}
      />
      <span className='text-neutral-500 text-sm font-medium'>No tags found</span>
    </div>
  )
}
