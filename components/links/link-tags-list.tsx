'use client'

import { retrieveTagById } from '@/actions/tag'
import { Tag } from '@/types/tags'
import { useEffect, useState } from 'react'

interface LinkTagsListProps {
  tag: Tag
}

export function LinkTagsList({ tag }: LinkTagsListProps) {
  const [linkTags, setLinkTags] = useState([])

  // useEffect(() => {
  //   ;(async () => {
  //     const newTags = await retrieveTagById(tag.tag_id)
  //     setLinkTags(newTags)
  //   })()
  // }, [])

  return <div>a</div>
}
