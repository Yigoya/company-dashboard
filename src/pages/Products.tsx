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
import { Product } from '@/types';

export function Products() {
  const products = useAppSelector(state => state.products.items);

  const columns: ColumnDef<Product>[] = [
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
      accessorKey: 'sku',
      header: 'SKU',
    },
    {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ row }) => {
        const price = parseFloat(row.getValue('price'));
        return `$${price.toFixed(2)}`;
      },
    },
    {
      accessorKey: 'inventory',
      header: 'Inventory',
      cell: ({ row }) => {
        const inventory = row.getValue('inventory') as number | undefined;
        return inventory !== undefined ? inventory : 'N/A';
      },
    },
    {
      accessorKey: 'inStock',
      header: 'Status',
      cell: ({ row }) => {
        const inStock = row.getValue('inStock') as boolean;
        return (
          <Badge variant={inStock ? 'default' : 'secondary'}>
            {inStock ? 'In Stock' : 'Out of Stock'}
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
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage your product catalog
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
          <CardDescription>
            A list of all your products and their current status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable 
            columns={columns} 
            data={products} 
            searchKey="name"
          />
        </CardContent>
      </Card>
    </div>
  );
}