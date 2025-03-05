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
import { Badge } from '@/components/ui/badge';
import { Customer } from '@/types';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export function Customers() {
  const customers = useAppSelector(state => state.customers.items);

  const columns: ColumnDef<Customer>[] = [
    {
      accessorKey: 'name',
      header: 'Company',
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue('name')}</div>
      ),
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
      accessorKey: 'industry',
      header: 'Industry',
    },
    {
      accessorKey: 'size',
      header: 'Size',
    },
    {
      accessorKey: 'totalSpent',
      header: 'Total Spent',
      cell: ({ row }) => {
        const totalSpent = row.getValue('totalSpent') as number | undefined;
        return totalSpent !== undefined ? `$${totalSpent.toLocaleString()}` : '$0';
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const status = row.getValue('status') as string | undefined;
        return status ? (
          <Badge variant={
            status === 'Active' ? 'default' :
            status === 'Lead' ? 'outline' : 'secondary'
          }>
            {status}
          </Badge>
        ) : (
          <Badge variant="outline">New</Badge>
        );
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Joined',
      cell: ({ row }) => {
        const date = row.getValue('createdAt') as Date;
        return format(date, 'MMM dd, yyyy');
      },
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <p className="text-muted-foreground">
            View and manage your customer relationships
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
          <CardDescription>
            A list of all your customers and their contact information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable 
            columns={columns} 
            data={customers} 
            searchKey="name"
          />
        </CardContent>
      </Card>
    </div>
  );
}