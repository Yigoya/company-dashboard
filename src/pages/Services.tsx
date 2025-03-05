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
import { Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Service } from '@/types';

export function Services() {
  const services = useAppSelector(state => state.services.items);

  const columns: ColumnDef<Service>[] = [
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue('name')}</div>
      ),
    },
    {
      accessorKey: 'category',
      header: 'Category',
    },
    {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ row }) => {
        const price = parseFloat(row.getValue('price'));
        return `$${price.toFixed(2)}/hr`;
      },
    },
    {
      accessorKey: 'serviceLevel',
      header: 'Service Level',
      cell: ({ row }) => {
        const level = row.getValue('serviceLevel') as string | undefined;
        return level || 'Standard';
      },
    },
    {
      accessorKey: 'duration',
      header: 'Duration',
      cell: ({ row }) => {
        const duration = row.getValue('duration') as number | undefined;
        return duration ? `${duration} hours` : 'Variable';
      },
    },
    {
      accessorKey: 'available',
      header: 'Status',
      cell: ({ row }) => {
        const available = row.getValue('available') as boolean;
        return (
          <Badge variant={available ? 'default' : 'secondary'}>
            {available ? 'Available' : 'Unavailable'}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'createdAt',
      header: 'Added',
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
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="text-muted-foreground">
            Manage your service offerings
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service Catalog</CardTitle>
          <CardDescription>
            A list of all your services and their current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable 
            columns={columns} 
            data={services} 
            searchKey="name"
          />
        </CardContent>
      </Card>
    </div>
  );
}