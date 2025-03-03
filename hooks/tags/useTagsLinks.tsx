import { Tables } from '@/types'
import { useEffect, useState } from 'react'

import { retrieveTagById } from '@/actions/tag'
import { retrieveTagLynkByLynkId } from '@/actions/tag-lynk'

interface UseTagsLinksProps {
  lynk: Tables<'lynks'>
}

export function useTagsLinks({ lynk }: UseTagsLinksProps) {
  const [tags, setTags] = useState<Tables<'tags'>[]>([])

  useEffect(() => {
    ;(async () => {
      const { data: tagLynks } = await retrieveTagLynkByLynkId(lynk.id)
      const tags = await Promise.all(
        tagLynks!.map(async tagLynk => {
          const { data: tag } = await retrieveTagById(tagLynk.tag_id)
          return tag
        })
      )

      const filteredTags = tags.filter((tag): tag is Tables<'tags'> => tag !== undefined)
      setTags(prevTags => [...prevTags, ...filteredTags])
    })()
  }, [])

  return { tags }
}
