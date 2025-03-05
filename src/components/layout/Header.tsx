import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { markNotificationAsRead } from '@/store/slices/uiSlice';
import { Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NotificationsPopover } from './NotificationsPopover';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const company = useAppSelector(state => state.company.data);
  const notifications = useAppSelector(state => state.ui.notifications);
  const dispatch = useAppDispatch();
  
  const initials = company.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  notifications.filter(n => !n.read).length;

  const handleNotificationClick = (id: string) => {
    dispatch(markNotificationAsRead(id));
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Button
        variant="outline"
        size="icon"
        className="md:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex-1">
        <h1 className="text-xl font-semibold">Business Dashboard</h1>
      </div>
      <form className="relative hidden md:flex">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-64 pl-8 md:w-80 lg:w-96"
        />
      </form>
      
      <ModeToggle />
      
      <NotificationsPopover 
        notifications={notifications} 
        onNotificationClick={handleNotificationClick}
      />
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 rounded-full"
            aria-label="Account"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={company.logo} alt={company.name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link to="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}