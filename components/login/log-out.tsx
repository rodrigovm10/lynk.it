'use client'

import { signOut } from '@/actions/auth'
import { LogOutIcon } from 'lucide-react'
import { redirect } from 'next/navigation'

import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

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
