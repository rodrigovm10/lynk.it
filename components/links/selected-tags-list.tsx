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
      <CardContent className='p-0 flex justify-center h-9 items-center text-base gap-5 py-2 roun'>
        {selectedTags.map(tag => (
          <Badge
            key={tag.id}
            variant='secondary'
            className='flex gap-3 items-center'
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
