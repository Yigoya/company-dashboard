import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Customer } from '@/types';
import { mockCustomers } from '@/data/mockData';

interface CustomersState {
  items: Customer[];
  loading: boolean;
  error: string | null;
}

const initialState: CustomersState = {
  items: mockCustomers,
  loading: false,
  error: null,
};

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.items.push(action.payload);
    },
    updateCustomer: (state, action: PayloadAction<Customer>) => {
      const index = state.items.findIndex(customer => customer.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteCustomer: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(customer => customer.id !== action.payload);
    },
    setCustomersLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCustomersError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  addCustomer, 
  updateCustomer, 
  deleteCustomer,
  setCustomersLoading,
  setCustomersError
} = customersSlice.actions;

export default customersSlice.reducer;