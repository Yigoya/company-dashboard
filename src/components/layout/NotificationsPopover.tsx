import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Bell } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface NotificationsPopoverProps {
  notifications: Array<{
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    read: boolean;
  }>;
  onNotificationClick: (id: string) => void;
}

export function NotificationsPopover({ 
  notifications, 
  onNotificationClick 
}: NotificationsPopoverProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="border-b p-4">
          <h4 className="text-sm font-medium">Notifications</h4>
        </div>
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-sm text-muted-foreground">
            No notifications
          </div>
        ) : (
          <ScrollArea className="h-80">
            <div className="divide-y">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "cursor-pointer p-4 hover:bg-muted",
                    !notification.read && "bg-muted/50"
                  )}
                  onClick={() => onNotificationClick(notification.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "mt-1 h-2 w-2 rounded-full",
                      notification.type === 'info' && "bg-blue-500",
                      notification.type === 'success' && "bg-green-500",
                      notification.type === 'warning' && "bg-yellow-500",
                      notification.type === 'error' && "bg-red-500",
                    )} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
        <div className="border-t p-2">
          <Button variant="ghost" size="sm" className="w-full">
            Mark all as read
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}