import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from '@/types';
import { mockCompany } from '@/data/mockData';

interface CompanyState {
  data: Company;
  loading: boolean;
  error: string | null;
}

const initialState: CompanyState = {
  data: mockCompany,
  loading: false,
  error: null,
};

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    updateCompanyStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateCompanySuccess: (state, action: PayloadAction<Company>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateCompanyFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { updateCompanyStart, updateCompanySuccess, updateCompanyFailure } = companySlice.actions;

export default companySlice.reducer;