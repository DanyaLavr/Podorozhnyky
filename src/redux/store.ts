import { combineReducers, configureStore, type Reducer } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import postsReducer, { type PostsState } from "./posts/postsSlice";
import type { AuthState } from "./auth/authSlice";

export interface RootState {
  auth: AuthState;
  posts: PostsState;
}

const rootReducer: Reducer<RootState> = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
