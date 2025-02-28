import { Tables } from '@/types'
import { Pencil } from 'lucide-react'
import { retrieveTagById } from '@/actions/tag'
import { retrieveTagLynkByLynkId } from '@/actions/tag-lynk'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ShareLink } from './share-link'
import { LinkDialog } from './link-dialog'
import { DeleteLink } from './delete-link'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ExternalLink } from '@/components/ui/external-link'

interface LinkCardProps {
  lynk: Tables<'lynks'>
}

export async function LinkCard({ lynk }: LinkCardProps) {
  const { data: tagLynks } = await retrieveTagLynkByLynkId(lynk.id)
  const tags = await Promise.all(
    tagLynks!.map(async tagLynk => {
      const { data: tag } = await retrieveTagById(tagLynk.tag_id)
      return tag
    })
  )
  const date = new Date(lynk.created_at)
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
  })
  const year = date.getFullYear()

  return (
    <Card>
      <CardHeader className='p-4'>
        <div className='flex justify-between'>
          <CardTitle className='text-lg transition-opacity cursor-pointer hover:opacity-70'>
            <ExternalLink href={`/${lynk.lynk}`}>/{lynk.lynk}</ExternalLink>
          </CardTitle>
          <section className='flex items-center gap-3'>
            {lynk.total_clicks && lynk.total_clicks > 0 && (
              <Badge
                variant='outline'
                className='cursor-default'
              >
                {lynk.total_clicks > 1
                  ? `${lynk.total_clicks} clicks`
                  : `${lynk.total_clicks}  click`}
              </Badge>
            )}
            <Separator orientation='vertical' />
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
      <CardContent className='flex justify-between px-4'>
        <section className='space-x-2'>
          {tags.length > 0 &&
            tags?.map(tag => (
              <Badge
                key={tag?.id}
                variant='outline'
                className='cursor-default'
              >
                {tag?.name}
              </Badge>
            ))}
        </section>
        <section className='text-sm font-mono text-neutral-500 font-semibold'>
          {formattedDate}, {year}
        </section>
      </CardContent>
    </Card>
  )
}
