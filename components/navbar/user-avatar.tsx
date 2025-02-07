import { User } from '@supabase/supabase-js'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { LogOut } from '../login/log-out'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

interface UserAvatarProps {
  user: User | null
}

export function UserAvatar({ user }: UserAvatarProps) {
  const initials = user?.user_metadata.full_name
    .split(' ')
    .map((name: string) => name[0])
    .join('')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>
          <Avatar>
            <AvatarImage
              src={user?.user_metadata.avatar_url}
              alt={user?.user_metadata.full_name}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className='grid'>
          {user?.user_metadata.full_name}{' '}
          <span className='text-xs text-foreground font-normal'>{user?.user_metadata.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <LogOut />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
