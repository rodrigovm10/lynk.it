import { ExternalLink } from '../ui/external-link'

export function Footer() {
  return (
    <footer className='fixed bottom-0 flex justify-center w-full mb-4'>
      <ExternalLink
        href='https://x.com/rodrigo_vm19'
        className='transition-all duration-300 hover:underline text-sm'
      >
        🚀 Made by @rodrigovm10
      </ExternalLink>
    </footer>
  )
}
