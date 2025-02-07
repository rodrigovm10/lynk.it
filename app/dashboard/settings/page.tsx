import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TypographyP } from '@/components/ui/typografy'
import { createClient } from '@/utils/supabase/server'
import { Download, HeartCrack, Save } from 'lucide-react'

export default async function Settings() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()

  return (
    <div className='flex w-full flex-col space-y-4 duration-500 animate-in fade-in-5 slide-in-from-bottom-2'>
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
                <Input defaultValue={data.user?.user_metadata.full_name} />
              </section>
              <section>
                <Label id='email'>Email</Label>
                <Input
                  id='name'
                  name='id'
                  type='email'
                  disabled
                  defaultValue={data.user?.user_metadata.email}
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

                  <Button
                    variant='destructive'
                    className='px-4'
                  >
                    <HeartCrack />
                    <span>Delete account</span>
                  </Button>
                </section>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
    </div>
  )
}
