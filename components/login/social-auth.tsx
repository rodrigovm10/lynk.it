'use client'

import { signInWithGithub, signInWithGoogle } from '@/actions/auth'

import { Button } from '@/components/ui/button'
import { GithubLogo, GoogleLogo } from '@/components/icons/icons'
import { PendingAction } from '../ui/pending-action'
import { useTransition } from 'react'

export function SocialAuth() {
  const [isPending, startTransition] = useTransition()

  return (
    <>
      <Button
        variant='outline'
        onClick={signInWithGoogle}
      >
        <PendingAction
          isPending={isPending}
          normalText='Continue with Google'
          loadingText='Signing in... '
          icon={<GoogleLogo />}
        />
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
