import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Supplier } from '@/types';
import { Badge } from '@/components/ui/badge';
import { StarIcon } from 'lucide-react';

interface SuppliersListProps {
  suppliers: Supplier[];
}

export function SuppliersList({ suppliers }: SuppliersListProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Key Suppliers</CardTitle>
        <CardDescription>
          Your active supply chain partners
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {suppliers.map((supplier) => {
            const initials = supplier.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase();

            return (
              <div key={supplier.id} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium leading-none">
                      {supplier.name}
                    </p>
                    <Badge variant={
                      supplier.status === 'Active' ? 'default' :
                      supplier.status === 'Pending' ? 'outline' : 'secondary'
                    }>
                      {supplier.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {supplier.category}
                  </p>
                </div>
                <div className="ml-auto flex items-center">
                  {supplier.rating && (
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{supplier.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}