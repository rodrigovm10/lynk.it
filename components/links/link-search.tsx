'use client'

import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function SearchLink() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)

    if (e.target.value) {
      params.set('search', e.target.value)
    } else {
      params.delete('search')
    }
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='relative'>
      <Search
        className='absolute z-1 left-2 top-3'
        size={16}
      />
      <Input
        autoComplete='off'
        className=' pl-8 text-sm'
        placeholder='Search a link'
        onChange={handleSearch}
        defaultValue={searchParams.get('search')?.toString() || ''}
      />
    </div>
  )
}
