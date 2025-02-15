import { Tag } from '@/types/tags'
import { Label } from '../ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SelectTagsProps {
  tags: Tag[]
  onSelectTags: (tagId: string) => void
}

export function SelectTags({ tags, onSelectTags }: SelectTagsProps) {
  return (
    <div className='space-y-1'>
      <Label htmlFor='tags'>Add tags to your link:</Label>
      <Select
        onValueChange={value => {
          onSelectTags(value)
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder='Tag' />
        </SelectTrigger>
        <SelectContent>
          {tags.map(tag => (
            <SelectItem
              key={tag.id}
              value={tag.id}
            >
              {tag.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
