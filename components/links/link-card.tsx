import { Lynk } from '@/types/lynk'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ShareLink } from './share-link'

interface LinkCardProps {
  lynk: Lynk
}

export function LinkCard({ lynk }: LinkCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle className='text-lg'>/{lynk.lynk}</CardTitle>
          <ShareLink lynk={lynk} />
        </div>
        <CardDescription>
          <span className='font-medium'>{lynk.link}</span>
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}
