import { Lynk } from '@/types/lynk'
import { Pencil } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ShareLink } from './share-link'
import { LinkDialog } from './link-dialog'
import { DeleteLink } from './delete-link'
import { retrieveTagLynkByLynkId } from '@/actions/tag-lynk'
import { retrieveTagById } from '@/actions/tag'
import { LinkTagsList } from './link-tags-list'
import { Badge } from '../ui/badge'

interface LinkCardProps {
  lynk: Lynk
}

export async function LinkCard({ lynk }: LinkCardProps) {
  const { data: tagLynks } = await retrieveTagLynkByLynkId(lynk.id)
  const tags = await Promise.all(
    tagLynks!.map(async tagLynk => {
      const { data: tag } = await retrieveTagById(tagLynk.tag_id)
      return tag
    })
  )

  return (
    <Card>
      <CardHeader className='p-4'>
        <div className='flex justify-between'>
          <CardTitle className='text-lg'>/{lynk.lynk}</CardTitle>
          <section className='flex items-center gap-3'>
            <ShareLink lynk={lynk} />
            <LinkDialog
              lynk={lynk}
              title='Edit lynk'
              description={`/${lynk.lynk}`}
              trigger={
                <Pencil
                  size={16}
                  className='transition-opacity hover:opacity-75 cursor-pointer'
                />
              }
            />
            <DeleteLink lynk={lynk} />
          </section>
        </div>
        <CardDescription>
          <span className='font-medium'>{lynk.link}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className='space-x-2 px-4'>
        {tags.length > 0 &&
          tags?.map(tag => (
            <Badge
              key={tag?.id}
              variant='outline'
            >
              {tag?.name}
            </Badge>
          ))}
      </CardContent>
    </Card>
  )
}
