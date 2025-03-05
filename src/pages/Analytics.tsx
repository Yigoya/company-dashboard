import { CustomerChart } from '@/components/dashboard/CustomerChart';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { StatCard } from '@/components/dashboard/StatCard';
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
import {
  customerAcquisitionData,
  mockDashboardStats,
  monthlyRevenueData,
} from '@/data/mockData';
import {
  BarChart3,
  DollarSign,
  MousePointerClick,
  Users,
} from 'lucide-react';

export function Analytics() {
  const stats = mockDashboardStats.analytics;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <p className="text-muted-foreground">
          Detailed performance metrics for your business
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value={`$${stats.revenue.toLocaleString()}`}
          icon={DollarSign}
          trend={12}
        />
        <StatCard
          title="Profile Views"
          value={stats.views.toLocaleString()}
          icon={Users}
          trend={8}
        />
        <StatCard
          title="Leads Generated"
          value={stats.leads.toLocaleString()}
          icon={MousePointerClick}
          trend={5}
        />
        <StatCard
          title="Conversion Rate"
          value={`${Math.round((stats.conversions / stats.leads) * 100)}%`}
          icon={BarChart3}
          trend={2}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RevenueChart data={monthlyRevenueData} />
        <CustomerChart data={customerAcquisitionData} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Traffic Sources</CardTitle>
          <CardDescription>
            Where your profile visitors are coming from
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>Visitors</TableHead>
                <TableHead>Conversion Rate</TableHead>
                <TableHead>Revenue</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Direct</TableCell>
                <TableCell>4,890</TableCell>
                <TableCell>3.2%</TableCell>
                <TableCell>$15,290</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Search</TableCell>
                <TableCell>3,245</TableCell>
                <TableCell>2.8%</TableCell>
                <TableCell>$12,648</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Social Media</TableCell>
                <TableCell>2,890</TableCell>
                <TableCell>4.1%</TableCell>
                <TableCell>$18,203</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Referral</TableCell>
                <TableCell>1,475</TableCell>
                <TableCell>5.2%</TableCell>
                <TableCell>$9,320</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}