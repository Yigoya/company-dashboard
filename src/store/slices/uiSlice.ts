import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  theme: 'light' | 'dark' | 'system';
  sidebarOpen: boolean;
  notifications: Array<{
    id: string;
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    read: boolean;
  }>;
}

const initialState: UiState = {
  theme: 'system',
  sidebarOpen: false,
  notifications: [
    {
      id: '1',
      title: 'New Customer',
      message: 'TechGlobal Inc. has registered as a new customer.',
      type: 'info',
      read: false,
    },
    {
      id: '2',
      title: 'Product Update',
      message: 'Your product catalog has been updated successfully.',
      type: 'success',
      read: false,
    },
  ],
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
      state.theme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
    addNotification: (state, action: PayloadAction<{
      title: string;
      message: string;
      type: 'info' | 'success' | 'warning' | 'error';
    }>) => {
      state.notifications.unshift({
        id: Date.now().toString(),
        ...action.payload,
        read: false,
      });
    },
    markNotificationAsRead: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(n => n.id === action.payload);
      if (notification) {
        notification.read = true;
      }
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { 
  setTheme, 
  toggleSidebar, 
  setSidebarOpen,
  addNotification,
  markNotificationAsRead,
  clearNotifications
} = uiSlice.actions;

export default uiSlice.reducer;