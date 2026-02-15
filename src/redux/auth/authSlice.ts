import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./operations";
import type { IUser } from "@/types/user/user";

const initialState = {
  user: undefined as IUser | undefined,
  isLoading: true,
  error: null as string | null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = undefined;
      })
      .addMatcher(isPending(registerUser, loginUser), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isFulfilled(registerUser, loginUser), (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addMatcher(isRejected(registerUser, loginUser), (state, action) => {
        state.isLoading = false;

        switch (action.payload) {
          case "auth/invalid-credential":
            state.error = "Не вдалося увійти. Перевірте пошту та пароль.";
            break;
          case "auth/email-already-in-use":
            state.error =
              "Не вдалося зареєструватися. Ця електронна пошта вже використовується.";
            break;
          default:
            state.error = "Сталась помилка, спробуйте ще раз.";
        }
      });
  },
});
export const { startLoading, stopLoading, setUser, resetError } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
