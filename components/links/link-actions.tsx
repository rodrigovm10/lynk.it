import { LinkDialog } from './link-dialog'
import { SearchLink } from './link-search'
import { SelectTag } from '@/components/tags/select-tag'

export function LinkActions() {
  return (
    <section className='flex justify-between gap-6 mt-4'>
      <SearchLink />
      <div className='flex gap-4'>
        <SelectTag />
        <LinkDialog />
      </div>
    </section>
  )
}
