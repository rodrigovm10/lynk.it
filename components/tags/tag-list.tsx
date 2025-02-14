import { Tag } from '@/types/tags'
import { TagCard } from './tag-card'

interface TagListProps {
  tags: Tag[] | undefined
}

export function TagList({ tags }: TagListProps) {
  return (
    <section className='mb-2 flex w-full flex-col space-y-1'>
      {tags?.map(tag => (
        <TagCard
          key={tag.id}
          tag={tag}
        />
      ))}
    </section>
  )
}
