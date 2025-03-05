import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Analytics } from '@/types';
import { mockAnalytics, monthlyRevenueData, customerAcquisitionData } from '@/data/mockData';

interface AnalyticsState {
  data: Analytics;
  revenueData: Array<{ name: string; revenue: number }>;
  customerData: Array<{ name: string; customers: number }>;
  loading: boolean;
  error: string | null;
}

const initialState: AnalyticsState = {
  data: mockAnalytics,
  revenueData: monthlyRevenueData,
  customerData: customerAcquisitionData,
  loading: false,
  error: null,
};

export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    updateAnalytics: (state, action: PayloadAction<Analytics>) => {
      state.data = action.payload;
    },
    updateRevenueData: (state, action: PayloadAction<Array<{ name: string; revenue: number }>>) => {
      state.revenueData = action.payload;
    },
    updateCustomerData: (state, action: PayloadAction<Array<{ name: string; customers: number }>>) => {
      state.customerData = action.payload;
    },
    setAnalyticsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAnalyticsError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  updateAnalytics, 
  updateRevenueData, 
  updateCustomerData,
  setAnalyticsLoading,
  setAnalyticsError
} = analyticsSlice.actions;

export default analyticsSlice.reducer;