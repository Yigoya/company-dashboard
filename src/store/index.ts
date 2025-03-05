import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './slices/companySlice';
import productsReducer from './slices/productsSlice';
import servicesReducer from './slices/servicesSlice';
import customersReducer from './slices/customersSlice';
import analyticsReducer from './slices/analyticsSlice';
import uiReducer from './slices/uiSlice';
import partnershipsReducer from './slices/partnershipsSlice';
import supplierReducer from './slices/supplierSlice';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    products: productsReducer,
    services: servicesReducer,
    customers: customersReducer,
    analytics: analyticsReducer,
    ui: uiReducer,
    partnerships: partnershipsReducer,
    suppliers: supplierReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;