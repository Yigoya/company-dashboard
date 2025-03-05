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
import { Partnership } from '@/types';

export function Partnerships() {
  const partnerships = useAppSelector(state => state.partnerships.items);

  const columns: ColumnDef<Partnership>[] = [
    {
      accessorKey: 'partnerName',
      header: 'Partner',
      cell: ({ row }) => (
        <div className="font-medium">{row.getValue('partnerName')}</div>
      ),
    },
    {
      accessorKey: 'partnershipType',
      header: 'Type',
    },
    {
      accessorKey: 'contactPerson',
      header: 'Contact Person',
    },
    {
      accessorKey: 'contactEmail',
      header: 'Email',
    },
    {
      accessorKey: 'startDate',
      header: 'Start Date',
      cell: ({ row }) => {
        const date = row.getValue('startDate') as Date;
        return format(date, 'MMM dd, yyyy');
      },
    },
    {
      accessorKey: 'endDate',
      header: 'End Date',
      cell: ({ row }) => {
        const date = row.getValue('endDate') as Date | undefined;
        return date ? format(date, 'MMM dd, yyyy') : 'Ongoing';
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
          <h2 className="text-3xl font-bold tracking-tight">Partnerships</h2>
          <p className="text-muted-foreground">
            Manage your strategic business partnerships
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Partnership
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Partnership Network</CardTitle>
          <CardDescription>
            A list of all your business partnerships and their current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable 
            columns={columns} 
            data={partnerships} 
            searchKey="partnerName"
          />
        </CardContent>
      </Card>
    </div>
  );
}