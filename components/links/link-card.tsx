import { Lynk } from '@/types/lynk'
import { Pencil, Trash } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ShareLink } from './share-link'
import { LinkDialog } from './link-dialog'

interface LinkCardProps {
  lynk: Lynk
}

export function LinkCard({ lynk }: LinkCardProps) {
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
                  className='transition-opacity hover:opacity-75'
                />
              }
            />
            <Trash
              size={16}
              className='transition-opacity hover:opacity-75'
            />
          </section>
        </div>
        <CardDescription>
          <span className='font-medium'>{lynk.link}</span>
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
