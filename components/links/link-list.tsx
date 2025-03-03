'use client'

import { Tables } from '@/types'
import { LinkCard } from './link-card'
import { useSearchParams } from 'next/navigation'

interface LinkListProps {
  lynks: Tables<'lynks'>[]
}

export function LinkList({ lynks }: LinkListProps) {
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  const filteredLynks = lynks.filter(lynk => lynk.lynk.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <section>
        {filteredLynks.length === 0 && (
          <p className='text-center text-gray-500'>No links found with that lynk </p>
        )}
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 animate-in fade-in-5 slide-in-from-bottom-2 duration-500'>
        {filteredLynks?.map(lynk => (
          <LinkCard
            key={lynk.id}
            lynk={lynk}
          />
        ))}
      </section>
    </div>
  )
}
