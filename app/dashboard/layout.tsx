import { Navbar } from '@/components/dashboard/navbar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Navbar />
      <main className='px-4 py-2'>{children}</main>
    </>
  )
}
