import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Customer } from '@/types';
import { format } from 'date-fns';

interface RecentCustomersProps {
  customers: Customer[];
}

export function RecentCustomers({ customers }: RecentCustomersProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Customers</CardTitle>
        <CardDescription>
          {customers.length} customers joined recently
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {customers.map((customer) => {
            const initials = customer.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase();

            return (
              <div key={customer.id} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {customer.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {customer.email}
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  {format(customer.createdAt, 'MMM dd')}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}