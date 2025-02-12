import { Tags } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

export function NoTagsCreated() {
  return (
    <Card>
      <CardContent className='p-0 flex justify-center h-9 items-center text-base gap-5 py-2'>
        <Tags size={18} />
        <span className='text-sm font-medium'>You don't have any tag created.</span>
      </CardContent>
    </Card>
  )
}
