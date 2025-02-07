import { TypographyP } from '@/components/ui/typografy'
import { Loader } from 'lucide-react'

export default function Loading() {
  return (
    <div className='mt-14 w-full text-neutral-500 dark:text-neutral-400 flex flex-col items-center duration-100 animate-in fade-in-20'>
      <Loader
        className='animate-spin'
        size={20}
      />
      <TypographyP className='mt-2'>Loading...</TypographyP>
    </div>
  )
}
