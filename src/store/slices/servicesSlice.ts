import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Service } from '@/types';
import { mockServices } from '@/data/mockData';

interface ServicesState {
  items: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  items: mockServices,
  loading: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    addService: (state, action: PayloadAction<Service>) => {
      state.items.push(action.payload);
    },
    updateService: (state, action: PayloadAction<Service>) => {
      const index = state.items.findIndex(service => service.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteService: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(service => service.id !== action.payload);
    },
    setServicesLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setServicesError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  addService, 
  updateService, 
  deleteService,
  setServicesLoading,
  setServicesError
} = servicesSlice.actions;

export default servicesSlice.reducer;