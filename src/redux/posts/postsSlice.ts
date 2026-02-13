import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/app";

export interface Post {
  id: string;
  region: string;
  title: string;
  description: string;
  creatorName: string;
  readTime: number;
  locationImage: string;
  creatorImage: string;
  createdAt: number;
}

export interface PostsState {
  items: Post[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const query = await getDocs(collection(db, "posts"));
  return query.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Post[];
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Помилка сервера";
      });
  },
});

export default postsSlice.reducer;
