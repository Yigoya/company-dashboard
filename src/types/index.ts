export type BusinessType = 'B2B' | 'Service' | 'Retail';

export interface Company {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  businessType: BusinessType;
  description: string;
  logo?: string;
  website?: string;
  foundedYear?: number;
  employeeCount?: number;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  industry?: string;
  taxId?: string;
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface Product {
  id: string;
  companyId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
  sku?: string;
  inventory?: number;
  minimumOrderQuantity?: number;
  leadTime?: number;
  unitOfMeasure?: string;
  specifications?: Record<string, string>;
  certifications?: string[];
}

export interface Service {
  id: string;
  companyId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
  duration?: number;
  deliveryTime?: number;
  serviceLevel?: 'Basic' | 'Standard' | 'Premium';
  requirements?: string[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  companyId: string;
  createdAt: Date;
  contactPerson?: string;
  phone?: string;
  industry?: string;
  size?: 'Small' | 'Medium' | 'Large' | 'Enterprise';
  status?: 'Lead' | 'Active' | 'Inactive';
  lastOrderDate?: Date;
  totalSpent?: number;
}

export interface Analytics {
  views: number;
  leads: number;
  conversions: number;
  revenue: number;
  averageOrderValue?: number;
  customerLifetimeValue?: number;
  customerAcquisitionCost?: number;
  churnRate?: number;
}

export interface DashboardStats {
  totalProducts: number;
  totalServices: number;
  totalCustomers: number;
  analytics: Analytics;
}

export interface Partnership {
  id: string;
  companyId: string;
  partnerName: string;
  partnerLogo?: string;
  partnerWebsite?: string;
  partnershipType: 'Reseller' | 'Technology' | 'Strategic' | 'Channel';
  startDate: Date;
  endDate?: Date;
  status: 'Active' | 'Pending' | 'Expired';
  description: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone?: string;
  agreements?: string[];
  benefits?: string[];
}

export interface Supplier {
  id: string;
  companyId: string;
  name: string;
  contactPerson: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  category: string;
  status: 'Active' | 'Inactive' | 'Pending';
  rating?: number;
  paymentTerms?: string;
  leadTime?: number;
  minimumOrderValue?: number;
  createdAt: Date;
  updatedAt?: Date;
  products?: string[];
}

export interface Contract {
  id: string;
  companyId: string;
  customerId: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  value: number;
  status: 'Draft' | 'Pending' | 'Active' | 'Completed' | 'Cancelled';
  terms?: string;
  attachments?: string[];
  createdAt: Date;
  updatedAt?: Date;
}

export interface Quote {
  id: string;
  companyId: string;
  customerId: string;
  items: Array<{
    productId?: string;
    serviceId?: string;
    name: string;
    quantity: number;
    unitPrice: number;
    discount?: number;
  }>;
  subtotal: number;
  discount?: number;
  tax?: number;
  total: number;
  status: 'Draft' | 'Sent' | 'Accepted' | 'Rejected' | 'Expired';
  validUntil: Date;
  notes?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface Invoice {
  id: string;
  companyId: string;
  customerId: string;
  quoteId?: string;
  contractId?: string;
  invoiceNumber: string;
  items: Array<{
    productId?: string;
    serviceId?: string;
    name: string;
    quantity: number;
    unitPrice: number;
    discount?: number;
  }>;
  subtotal: number;
  discount?: number;
  tax?: number;
  total: number;
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue' | 'Cancelled';
  dueDate: Date;
  paymentTerms?: string;
  notes?: string;
  createdAt: Date;
  updatedAt?: Date;
}