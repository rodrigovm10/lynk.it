import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function GetStarted() {
  return (
    <Button variant='outline'>
      Get Started{' '}
      <span>
        <ArrowRight />
      </span>
    </Button>
  )
}
