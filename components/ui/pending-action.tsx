import { LoaderIcon } from 'lucide-react'

interface LoaderProps {
  isPending: boolean
  loadingText: string
  normalText: string
  icon?: React.ReactNode
}

export function PendingAction({ isPending, loadingText, icon, normalText }: LoaderProps) {
  return (
    <>
      {isPending ? <LoaderIcon className='animate-spin' /> : icon || null}
      {isPending ? loadingText : normalText}
    </>
  )
}
