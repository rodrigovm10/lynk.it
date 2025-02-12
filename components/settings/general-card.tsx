import { Save } from 'lucide-react'
import { User } from '@supabase/supabase-js'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

interface GeneralCardProps {
  user: User | null
}

export function GeneralCard({ user }: GeneralCardProps) {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>General</CardTitle>
          <CardDescription className='font-semibold'>
            Update your personal information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className='flex flex-col gap-10'>
            <section>
              <Label>Username</Label>
              <Input defaultValue={user?.user_metadata.full_name} />
            </section>
            <section>
              <Label id='email'>Email</Label>
              <Input
                id='name'
                name='id'
                type='email'
                disabled
                defaultValue={user?.user_metadata.email}
              />
              <span className='text-neutral-500 text-xs'>
                Your email is provided by the OAuth provider.
              </span>
            </section>
            <Button
              type='submit'
              className='self-end w-auto'
              disabled
              size='sm'
            >
              <Save />
              <span>Save</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
