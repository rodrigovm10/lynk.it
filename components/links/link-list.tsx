import { Tables } from '@/types'
import { LinkCard } from './link-card'

interface LinkListProps {
  lynks: Tables<'lynks'>[]
}

export function LinkList({ lynks }: LinkListProps) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 animate-in fade-in-5 slide-in-from-bottom-2 duration-500'>
      {lynks?.map(lynk => (
        <LinkCard
          key={lynk.id}
          lynk={lynk}
        />
      ))}
    </section>
  )
}
