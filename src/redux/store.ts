import { combineReducers, configureStore, type Reducer } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import postsSlice from "./posts/postsSlice";
import { uiReducer, type UIState } from "./ui/uiSlice";

export interface RootState {
  auth: ReturnType<typeof authReducer>;
  posts: ReturnType<typeof postsSlice>;
  ui: UIState;
}

const rootReducer: Reducer<RootState> = combineReducers({
  auth: authReducer,
  posts: postsSlice,
  ui: uiReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
