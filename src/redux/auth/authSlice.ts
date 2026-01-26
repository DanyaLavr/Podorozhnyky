import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./operations";
import type { IUser } from "@/types/auth/user";

const initialState = {
  user: undefined as IUser | undefined,
  isLoading: false,
  error: null as string | null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

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
          default:
            state.error = "Сталась помилка, спробуйте ще раз.";
        }
      });
  },
});
export const { resetError } = authSlice.actions;
export const authReducer = authSlice.reducer;
