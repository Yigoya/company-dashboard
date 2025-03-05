import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function Reports() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
        <p className="text-muted-foreground">
          Access and download detailed business reports
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>
            Download reports for different aspects of your business
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Last Generated</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Monthly Sales</TableCell>
                <TableCell>Detailed breakdown of monthly sales and revenue</TableCell>
                <TableCell>June 15, 2025</TableCell>
                <TableCell>
                  <button className="text-blue-600 hover:underline">Download</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Customer Acquisition</TableCell>
                <TableCell>Analysis of new customer acquisition channels</TableCell>
                <TableCell>June 10, 2025</TableCell>
                <TableCell>
                  <button className="text-blue-600 hover:underline">Download</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Product Performance</TableCell>
                <TableCell>Performance metrics for all products</TableCell>
                <TableCell>June 5, 2025</TableCell>
                <TableCell>
                  <button className="text-blue-600 hover:underline">Download</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Service Utilization</TableCell>
                <TableCell>Analysis of service bookings and utilization</TableCell>
                <TableCell>May 28, 2025</TableCell>
                <TableCell>
                  <button className="text-blue-600 hover:underline">Download</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Financial Summary</TableCell>
                <TableCell>Complete financial overview with P&L statement</TableCell>
                <TableCell>May 15, 2025</TableCell>
                <TableCell>
                  <button className="text-blue-600 hover:underline">Download</button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}