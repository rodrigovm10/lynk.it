'use client'

import { signOut } from '@/actions/auth'
import { redirect } from 'next/navigation'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { LogOutIcon } from 'lucide-react'

export function LogOut() {
  const handleSignOut = async () => {
    await signOut()
    redirect('/')
  }

  return (
    <DropdownMenuItem onClick={handleSignOut}>
      <LogOutIcon />
      <span>Log Out</span>
    </DropdownMenuItem>
  )
}
