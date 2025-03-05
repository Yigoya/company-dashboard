import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Partnership } from '@/types';
import { mockPartnerships } from '@/data/mockData';

interface PartnershipsState {
  items: Partnership[];
  loading: boolean;
  error: string | null;
}

const initialState: PartnershipsState = {
  items: mockPartnerships,
  loading: false,
  error: null,
};

export const partnershipsSlice = createSlice({
  name: 'partnerships',
  initialState,
  reducers: {
    addPartnership: (state, action: PayloadAction<Partnership>) => {
      state.items.push(action.payload);
    },
    updatePartnership: (state, action: PayloadAction<Partnership>) => {
      const index = state.items.findIndex(partnership => partnership.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deletePartnership: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(partnership => partnership.id !== action.payload);
    },
    setPartnershipsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPartnershipsError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  addPartnership, 
  updatePartnership, 
  deletePartnership,
  setPartnershipsLoading,
  setPartnershipsError
} = partnershipsSlice.actions;

export default partnershipsSlice.reducer;