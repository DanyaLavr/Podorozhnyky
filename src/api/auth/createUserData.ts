import { db } from "@/lib/firebase/app";
import type { ICreateUserData } from "@/types/auth/form";
import type { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";

const createUserData = async ({ uid, displayName }: ICreateUserData) => {
  try {
    await setDoc(doc(db, "users", uid), {
      displayName,
      imageUrl: "",
      description: "",
      favoritePosts: [],
    });
  } catch (error) {
    throw (error as FirebaseError).code;
  }
};

export default createUserData;
