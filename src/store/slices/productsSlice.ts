import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/types';
import { mockProducts } from '@/data/mockData';

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: mockProducts,
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
    setProductsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProductsError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  addProduct, 
  updateProduct, 
  deleteProduct,
  setProductsLoading,
  setProductsError
} = productsSlice.actions;

export default productsSlice.reducer;