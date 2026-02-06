import { auth } from "@/lib/firebase/app";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { FirebaseError } from "firebase/app";

import { signOut } from "firebase/auth";
import { getUser } from "@/api/user/getUser";
import type { ILoginUserProps, IRegisterUserProps } from "@/types/auth/form";
import register from "@/api/auth/register";
import login from "@/api/auth/login";
import createUserData from "@/api/auth/createUserData";
import type { IUser } from "@/types/user/user";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    { fullName, email, password }: IRegisterUserProps,
    { rejectWithValue }
  ) => {
    try {
      const { uid, displayName } = await register({
        fullName,
        email,
        password,
      });
      await createUserData({ uid, displayName });
      return {
        uid,
        displayName,
        imageUrl: "",
        description: "",
        favoritePosts: [],
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: ILoginUserProps, { rejectWithValue }) => {
    try {
      const uid = await login({ email, password });
      const user = await getUser(uid);
      return {
        uid,
        ...(user as Omit<IUser, "uid">),
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      return rejectWithValue((error as FirebaseError).code);
    }
  }
);
