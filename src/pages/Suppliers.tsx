import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import { useAppSelector } from '@/store/hooks';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { Plus, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Supplier } from '@/types';

export function Suppliers() {
  const suppliers = useAppSelector(state => state.suppliers.items);

  const columns: ColumnDef<Supplier>[] = [
    {
      accessorKey: 'name',
      header: 'Supplier',
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue('name')}</div>
      ),
    },
    {
      accessorKey: 'category',
      header: 'Category',
    },
    {
      accessorKey: 'contactPerson',
      header: 'Contact Person',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'rating',
      header: 'Rating',
      cell: ({ row }) => {
        const rating = row.getValue('rating') as number | undefined;
        return rating ? (
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{rating}</span>
          </div>
        ) : (
          <span>-</span>
        );
      },
    },
    {
      accessorKey: 'leadTime',
      header: 'Lead Time',
      cell: ({ row }) => {
        const leadTime = row.getValue('leadTime') as number | undefined;
        return leadTime ? `${leadTime} days` : '-';
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.getValue('status') as string;
        return (
          <Badge variant={
            status === 'Active' ? 'default' :
            status === 'Pending' ? 'outline' : 'secondary'
          }>
            {status}
          </Badge>
        );
      },
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Suppliers</h2>
          <p className="text-muted-foreground">
            Manage your supply chain partners
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Supplier
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Supplier Network</CardTitle>
          <CardDescription>
            A list of all your suppliers and their current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable 
            columns={columns} 
            data={suppliers} 
            searchKey="name"
          />
        </CardContent>
      </Card>
    </div>
  );
}