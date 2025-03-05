import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Service } from '@/types';
import { format } from 'date-fns';

interface ServicesTableProps {
  services: Service[];
}

export function ServicesTable({ services }: ServicesTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Added</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell className="font-medium">{service.name}</TableCell>
            <TableCell>{service.category}</TableCell>
            <TableCell>${service.price.toFixed(2)}/hr</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  service.available
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                }`}
              >
                {service.available ? 'Available' : 'Unavailable'}
              </span>
            </TableCell>
            <TableCell>{format(service.createdAt, 'MMM dd, yyyy')}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}