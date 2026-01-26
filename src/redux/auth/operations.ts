import { auth } from "@/lib/firebase/app";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { FirebaseError } from "firebase/app";
import Cookies from "js-cookie";

import {
  createUserWithEmailAndPassword,
  getIdToken,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export interface IRegisterUserProps {
  fullName: string;
  email: string;
  password: string;
}
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    { fullName, email, password }: IRegisterUserProps,
    { rejectWithValue }
  ) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user.user, { displayName: fullName });
      const token = await getIdToken(user.user);
      Cookies.set("token", token);

      return { uid: user.user.uid, displayName: fullName, email };
    } catch (error) {
      return rejectWithValue((error as FirebaseError).code);
    }
  }
);

export interface ILoginUserProps {
  email: string;
  password: string;
}
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: ILoginUserProps, { rejectWithValue }) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const token = await getIdToken(user.user);

      Cookies.set("token", token);
      return {
        uid: user.user.uid,
        displayName: user.user.displayName as string,
        email,
      };
    } catch (error) {
      return rejectWithValue((error as FirebaseError).code);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      Cookies.remove("token", { path: "/" });
    } catch (error) {
      return rejectWithValue((error as FirebaseError).code);
    }
  }
);
