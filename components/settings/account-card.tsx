import { Download } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TypographyP } from '@/components/ui/typografy'
import { DeleteAccount } from './delete-account'
import { User } from '@supabase/supabase-js'

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
            <div className='space-y-7 '>
              <section>
                <TypographyP>Export Links:</TypographyP>
                <Button variant='outline'>
                  <Download />
                  <span>Export links</span>
                </Button>
              </section>
              <section className='m-0'>
                <TypographyP>Delete Account:</TypographyP>

                <DeleteAccount id={user?.id} />
              </section>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </section>
  )
}
