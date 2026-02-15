import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  isLogoutModalOpen: boolean;
}

const initialState: UIState = {
  isLogoutModalOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openLogoutModal(state) {
      state.isLogoutModalOpen = true;
    },
    closeLogoutModal(state) {
      state.isLogoutModalOpen = false;
    },
  },
});

export const { openLogoutModal, closeLogoutModal } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
