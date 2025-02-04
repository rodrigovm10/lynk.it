import { Hero } from '@/components/home-page/hero'
import { HeroActions } from '@/components/home-page/hero-actions'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center px-6 pt-16 md:pt-24 text-center'>
      <Hero />
      <HeroActions />
    </div>
  )
}
