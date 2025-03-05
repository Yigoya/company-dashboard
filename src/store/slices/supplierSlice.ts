import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Supplier } from '@/types';
import { mockSuppliers } from '@/data/mockData';

interface SupplierState {
  items: Supplier[];
  loading: boolean;
  error: string | null;
}

const initialState: SupplierState = {
  items: mockSuppliers,
  loading: false,
  error: null,
};

export const supplierSlice = createSlice({
  name: 'suppliers',
  initialState,
  reducers: {
    addSupplier: (state, action: PayloadAction<Supplier>) => {
      state.items.push(action.payload);
    },
    updateSupplier: (state, action: PayloadAction<Supplier>) => {
      const index = state.items.findIndex(supplier => supplier.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteSupplier: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(supplier => supplier.id !== action.payload);
    },
    setSuppliersLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSuppliersError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  addSupplier, 
  updateSupplier, 
  deleteSupplier,
  setSuppliersLoading,
  setSuppliersError
} = supplierSlice.actions;

export default supplierSlice.reducer;