import { retrieveLynks } from '@/actions/lynk'

import { LinkCard } from './link-card'

export async function LinkList() {
  const { data } = await retrieveLynks()

  return (
    <section className='grid md:grid-cols-2 gap-4 mt-2'>
      {data?.map(lynk => (
        <LinkCard
          key={lynk.id}
          lynk={lynk}
        />
      ))}
    </section>
  )
}
