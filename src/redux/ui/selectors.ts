import type { RootState } from "../store";

export const selectIsLogoutModalOpen = (state: RootState) =>
  state.ui.isLogoutModalOpen;
