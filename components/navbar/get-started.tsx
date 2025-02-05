import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

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
