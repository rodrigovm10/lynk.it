import Image from 'next/image'
import logo from '@/public/logo.png'

import { SocialAuth } from '@/components/login/social-auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Login() {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='flex flex-col items-center'>
        <Image
          src={logo}
          alt='lynk.it logo'
          width={32}
          height={32}
          quality={100}
        />
        <CardTitle>Log in lynk.it</CardTitle>
        <CardDescription>Log in with your favorite provider</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <SocialAuth />
      </CardContent>
    </Card>
  )
}
