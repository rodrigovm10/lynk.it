import { Button } from '@/components/ui/button'
import { GithubLogo, GoogleLogo } from '@/components/icons/icons'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import logo from '@/public/logo.png'
import Image from 'next/image'

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
        <Button variant='outline'>
          <GoogleLogo />
          Continue with Google{' '}
        </Button>
        <Button variant='outline'>
          <GithubLogo />
          <span>Continue with Github</span>
        </Button>
      </CardContent>
    </Card>
  )
}
