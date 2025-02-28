import { useState } from 'react'
import { Tag } from '@/types/tags'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { SelectedTagsList } from './selected-tags-list'

interface SelectTagsProps {
  tags?: Tag[]
  onChangeTags: (selectedTags: Tag[]) => void
}

export function SelectTags({ tags, onChangeTags }: SelectTagsProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])

  const handleSelectTags = (tagId: string) => {
    const tagExists = selectedTags.find(tag => tag?.id === tagId)

    if (!tagExists) {
      const newTags = [...selectedTags, tags?.find(tag => tag.id === tagId)].filter(
        (tag): tag is Tag => tag !== undefined
      )
      setSelectedTags(newTags)
      onChangeTags(newTags)
    }
  }

  const handleRemoveSelectedTag = (tagId: string) => {
    const newTags = selectedTags.filter(tag => tag.id !== tagId)

    setSelectedTags(newTags)
    onChangeTags(newTags)
  }

  return (
    <>
      <div className='space-y-1'>
        <Label htmlFor='tags'>Add tags to your link:</Label>
        <Select
          onValueChange={value => {
            handleSelectTags(value)
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder='Tag' />
          </SelectTrigger>
          <SelectContent>
            {tags?.map(tag => (
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

      {selectedTags.length > 0 && (
        <SelectedTagsList
          selectedTags={selectedTags}
          onRemoveTag={handleRemoveSelectedTag}
        />
      )}
    </>
  )
}
