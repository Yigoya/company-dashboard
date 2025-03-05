import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Building2, 
  FileText, 
  HelpCircle, 
  Home, 
  Package, 
  Settings, 
  ShoppingCart, 
  Users, 
  Wrench,
  Handshake,
  Truck
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  className?: string;
}

interface SidebarItemProps {
  icon: React.ElementType;
  title: string;
  to: string;
}

export function SidebarItem({ icon: Icon, title, to }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-primary',
          isActive
            ? 'bg-accent text-primary font-medium'
            : 'text-muted-foreground'
        )
      }
    >
      <Icon className="h-4 w-4" />
      <span>{title}</span>
    </NavLink>
  );
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            <SidebarItem icon={Home} title="Overview" to="/" />
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Business
          </h2>
          <div className="space-y-1">
            <SidebarItem icon={Building2} title="Company Profile" to="/profile" />
            <SidebarItem icon={ShoppingCart} title="Products" to="/products" />
            <SidebarItem icon={Wrench} title="Services" to="/services" />
            <SidebarItem icon={Users} title="Customers" to="/customers" />
            <SidebarItem icon={Handshake} title="Partnerships" to="/partnerships" />
            <SidebarItem icon={Truck} title="Suppliers" to="/suppliers" />
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Sales
          </h2>
          <div className="space-y-1">
            <SidebarItem icon={FileText} title="Quotes" to="/quotes" />
            <SidebarItem icon={FileText} title="Invoices" to="/invoices" />
            <SidebarItem icon={FileText} title="Contracts" to="/contracts" />
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Analytics
          </h2>
          <div className="space-y-1">
            <SidebarItem icon={BarChart3} title="Performance" to="/analytics" />
            <SidebarItem icon={FileText} title="Reports" to="/reports" />
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Settings
          </h2>
          <div className="space-y-1">
            <SidebarItem icon={Settings} title="Account" to="/settings" />
            <SidebarItem icon={HelpCircle} title="Help & Support" to="/help" />
          </div>
        </div>
      </div>
    </div>
  );
}