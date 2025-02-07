import { Navbar } from '@/components/dashboard/navbar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Navbar />
      <main className='container my-4'>{children}</main>
    </>
  )
}
