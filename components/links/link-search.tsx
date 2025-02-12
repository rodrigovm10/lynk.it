import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'

export function SearchLink() {
  return (
    <div className='relative'>
      <Search
        className='absolute z-1 left-2 top-3'
        size={16}
      />
      <Input
        className=' pl-8 text-sm'
        placeholder='Search a link'
      />
    </div>
  )
}
