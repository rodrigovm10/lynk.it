import { Tag } from '@/types/tags'
import { XIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface SelectedTagsProps {
  selectedTags: Tag[]
  onRemoveTag: (tagId: string) => void
}

export function SelectedTagsList({ selectedTags, onRemoveTag }: SelectedTagsProps) {
  return (
    <Card>
      <CardContent className='px-2 min-h-9 flex justify-start items-center text-base gap-2 py-2 rounded-sm flex-wrap'>
        {selectedTags.map(tag => (
          <Badge
            key={tag.id}
            variant='secondary'
            className='flex gap-3 items-center self-center'
          >
            {tag.name}
            <button onClick={() => onRemoveTag(tag.id)}>
              <XIcon size={16} />
            </button>
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
}
