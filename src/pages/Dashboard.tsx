import { AdvancedRevenueChart } from '@/components/dashboard/AdvancedRevenueChart';
import { AdvancedStatCard } from '@/components/dashboard/AdvancedStatCard';
import { CustomerChart } from '@/components/dashboard/CustomerChart';
import { PartnershipsList } from '@/components/dashboard/PartnershipsList';
import { RecentCustomers } from '@/components/dashboard/RecentCustomers';
import { SuppliersList } from '@/components/dashboard/SuppliersList';
import { useAppSelector } from '@/store/hooks';
import {
  BarChart3,
  DollarSign,
  ShoppingCart,
  Users,
  Handshake,
  Truck,
  TrendingUp,
  Building,
} from 'lucide-react';

export function Dashboard() {
  const stats = useAppSelector(state => ({
    analytics: state.analytics.data,
    totalProducts: state.products.items.length,
    totalServices: state.services.items.length,
    totalCustomers: state.customers.items.length,
    totalPartnerships: state.partnerships.items.length,
    totalSuppliers: state.suppliers.items.length,
  }));
  
  const customers = useAppSelector(state => state.customers.items);
  const partnerships = useAppSelector(state => state.partnerships.items.filter(p => p.status === 'Active'));
  const suppliers = useAppSelector(state => state.suppliers.items.filter(s => s.status === 'Active'));
  const revenueData = useAppSelector(state => state.analytics.revenueData);
  const customerData = useAppSelector(state => state.analytics.customerData);
  
  // Enhanced revenue data with additional metrics
  const enhancedRevenueData = revenueData.map(item => ({
    ...item,
    target: Math.round(item.revenue * 1.2),
    expenses: Math.round(item.revenue * 0.6),
    profit: Math.round(item.revenue * 0.4),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your business performance
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AdvancedStatCard
          title="Total Revenue"
          value={`$${stats.analytics.revenue.toLocaleString()}`}
          icon={DollarSign}
          trend={12}
          secondaryValue={`$${stats.analytics.averageOrderValue?.toLocaleString() || '0'}`}
          secondaryLabel="Avg. Order Value"
          chartData={[40, 70, 55, 60, 85, 65, 75]}
        />
        <AdvancedStatCard
          title="Products & Services"
          value={stats.totalProducts + stats.totalServices}
          icon={ShoppingCart}
          trend={4}
          secondaryValue={`${stats.totalProducts} Products, ${stats.totalServices} Services`}
          secondaryLabel="Catalog Breakdown"
        />
        <AdvancedStatCard
          title="Customers"
          value={stats.totalCustomers}
          icon={Users}
          trend={7}
          secondaryValue={`$${stats.analytics.customerLifetimeValue?.toLocaleString() || '0'}`}
          secondaryLabel="Avg. Customer Value"
          chartData={[30, 40, 45, 50, 55, 65, 70]}
        />
        <AdvancedStatCard
          title="Conversion Rate"
          value={`${Math.round((stats.analytics.conversions / stats.analytics.leads) * 100)}%`}
          icon={TrendingUp}
          trend={2}
          secondaryValue={`${stats.analytics.churnRate?.toFixed(1) || '0'}%`}
          secondaryLabel="Churn Rate"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <AdvancedRevenueChart data={enhancedRevenueData} />
        <RecentCustomers customers={customers.slice(0, 5)} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <CustomerChart data={customerData} />
        <div className="col-span-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-lg font-medium">Business Network</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-md bg-primary/10 p-4 flex flex-col">
                <div className="flex items-center mb-2">
                  <Handshake className="h-5 w-5 mr-2 text-primary" />
                  <h4 className="font-medium">Partnerships</h4>
                </div>
                <p className="text-2xl font-bold">{stats.totalPartnerships}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Active strategic alliances
                </p>
              </div>
              <div className="rounded-md bg-primary/10 p-4 flex flex-col">
                <div className="flex items-center mb-2">
                  <Truck className="h-5 w-5 mr-2 text-primary" />
                  <h4 className="font-medium">Suppliers</h4>
                </div>
                <p className="text-2xl font-bold">{stats.totalSuppliers}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Supply chain partners
                </p>
              </div>
              <div className="rounded-md bg-primary/10 p-4 flex flex-col">
                <div className="flex items-center mb-2">
                  <Building className="h-5 w-5 mr-2 text-primary" />
                  <h4 className="font-medium">Industry</h4>
                </div>
                <p className="text-sm font-medium">Technology</p>
                <p className="text-sm text-muted-foreground mt-1">
                  B2B Software & Services
                </p>
              </div>
              <div className="rounded-md bg-primary/10 p-4 flex flex-col">
                <div className="flex items-center mb-2">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  <h4 className="font-medium">Market Position</h4>
                </div>
                <p className="text-sm font-medium">Growing</p>
                <p className="text-sm text-muted-foreground mt-1">
                  12% YoY growth rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <PartnershipsList partnerships={partnerships} />
        <SuppliersList suppliers={suppliers} />
      </div>
    </div>
  );
}