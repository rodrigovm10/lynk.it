'use client'

import { signInWithGithub, signInWithGoogle } from '@/actions/auth'
import { GithubLogo, GoogleLogo } from '../icons/icons'
import { Button } from '../ui/button'

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
