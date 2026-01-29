import { createSlice } from '@reduxjs/toolkit';

// 밑에 createSlice에 있어도 됨
const initialState = {
  isSidebarOpen: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebarOpen: (state) => {
      state.isSidebarOpen = true;
    },
    setSidebarClose: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { setSidebarOpen, setSidebarClose } = sidebarSlice.actions;
export default sidebarSlice.reducer;