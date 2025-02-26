import { retrieveAllLynks } from '@/actions/lynk'

import { LinkList } from '@/components/links/link-list'
import { LinkActions } from '@/components/links/link-actions'
import { NoLinksFound } from '@/components/links/no-links-found'
import { retrieveTags } from '@/actions/tag'

export default async function Links() {
  const [{ data: lynks, error: errorLynk }, { data: tags, error: errorTag }] = await Promise.all([
    retrieveAllLynks(),
    retrieveTags(),
  ])

  if (errorLynk) throw new Error(errorLynk)
  if (errorTag) throw new Error(errorTag)

  return (
    <section className='space-y-4'>
      <LinkActions tags={tags || []} />
      {lynks && lynks.length > 0 && <LinkList lynks={lynks} />}
      {lynks && lynks.length === 0 && <NoLinksFound tags={tags || []} />}
    </section>
  )
}
