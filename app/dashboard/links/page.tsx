import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search, Tag } from 'lucide-react'

export default function Links() {
  return (
    <>
      <section className='flex justify-between gap-6 mt-4'>
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
        <div className='flex gap-4'>
          <Button variant='outline'>
            <Tag />
            <span className='font-semibold'>Select tag</span>
          </Button>
          <Button>
            <Plus />
            <span className='font-semibold'>Create link</span>
          </Button>
        </div>
      </section>
    </>
  )
}
