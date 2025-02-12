'use client'

import { signInWithGithub, signInWithGoogle } from '@/actions/auth'

import { Button } from '@/components/ui/button'
import { GithubLogo, GoogleLogo } from '@/components/icons/icons'

export function SocialAuth() {
  return (
    <>
      <Button
        variant='outline'
        onClick={signInWithGoogle}
      >
        <GoogleLogo />
        Continue with Google{' '}
      </Button>
      <Button
        variant='outline'
        onClick={signInWithGithub}
      >
        <GithubLogo />
        <span>Continue with Github</span>
      </Button>
    </>
  )
}
