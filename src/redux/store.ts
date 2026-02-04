import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
