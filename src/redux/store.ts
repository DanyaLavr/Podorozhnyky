import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import postsSlice from "./posts/postsSlice";
import { uiReducer } from "./ui/uiSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsSlice,
  ui: uiReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
