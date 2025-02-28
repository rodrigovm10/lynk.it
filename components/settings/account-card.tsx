import { User } from '@supabase/supabase-js'

import { DeleteAccount } from './delete-account'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExportLinks } from './export-links'

interface AccountCardProps {
  user: User | null
}

export function AccountCard({ user }: AccountCardProps) {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription className='font-semibold'>Manage your account</CardDescription>
          <CardContent className='p-0'>
            <div className='space-y-7'>
              <ExportLinks />
              <DeleteAccount id={user?.id} />
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </section>
  )
}
