'use client'

import { signOut } from '@/actions/auth'
import { redirect } from 'next/navigation'
import { DropdownMenuItem } from '../ui/dropdown-menu'

export function LogOut() {
  const handleSignOut = async () => {
    await signOut()
    redirect('/')
  }

  return <DropdownMenuItem onClick={handleSignOut}>Log Out</DropdownMenuItem>
}
