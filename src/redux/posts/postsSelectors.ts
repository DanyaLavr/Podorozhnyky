import type { RootState } from "../store";
export const selectAllPosts = (state: RootState) => state.posts.items;
export const selectPostsLoading = (state: RootState) => state.posts.isLoading;
