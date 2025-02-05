interface LoginLayoutProps {
  children: React.ReactNode
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <main className="className='flex justify-center items-center mt-20 duration-700 animate-in fade-in-5 slide-in-from-top-3'>">
      <div className='flex justify-center items-center'>{children}</div>
    </main>
  )
}
