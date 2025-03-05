import { Toaster } from '@/components/ui/toaster';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Analytics } from '@/pages/Analytics';
import { CompanyProfile } from '@/pages/CompanyProfile';
import { Customers } from '@/pages/Customers';
import { Dashboard } from '@/pages/Dashboard';
import { Help } from '@/pages/Help';
import { Products } from '@/pages/Products';
import { Reports } from '@/pages/Reports';
import { Services } from '@/pages/Services';
import { Settings } from '@/pages/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Partnerships } from './pages/Partnerships';
import { Suppliers } from './pages/Suppliers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<CompanyProfile />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="customers" element={<Customers />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="suppliers" element={<Suppliers />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;