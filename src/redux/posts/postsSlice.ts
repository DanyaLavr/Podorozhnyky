import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/app";
import type { IStory } from "@/types/user/user";

export interface PostsState {
  items: IStory[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const snapshot = await getDocs(collection(db, "posts"));

  return snapshot.docs.map<IStory>((doc) => {
    const data = doc.data() as Omit<IStory, "id" | "createdAt"> & {
      createdAt?: unknown;
    };

    const createdAt =
      typeof data.createdAt === "number"
        ? data.createdAt
        : typeof data.createdAt === "object" &&
          data.createdAt !== null &&
          "toMillis" in data.createdAt &&
          typeof (data.createdAt as { toMillis: () => number }).toMillis ===
            "function"
        ? (data.createdAt as { toMillis: () => number }).toMillis()
        : Date.now();

    return {
      id: doc.id,
      ...data,
      createdAt,
    };
  });
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
