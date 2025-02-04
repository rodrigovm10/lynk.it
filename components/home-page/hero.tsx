import { TypographyH1, TypographyP } from '../ui/typografy'

export function Hero() {
  return (
    <section
      id='hero'
      className='text-center'
    >
      <TypographyH1 className='duration-500 animate-in fade-in-5 slide-in-from-bottom-2'>
        Simplify Your Link Management
      </TypographyH1>
      <TypographyP className='max-w-[75ch] text-sm md:text-base duration-700 animate-in fade-in-5 slide-in-from-top-2'>
        Lynk.it is an open-source platform for creating, managing, and sharing short links
        effortlessly. Fast, secure, and customizable—streamline your link management today!
      </TypographyP>
    </section>
  )
}
