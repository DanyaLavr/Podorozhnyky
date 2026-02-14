import { db } from "@/lib/firebase/app";
import type { IUser } from "@/types/user/user";
import { doc, getDoc } from "firebase/firestore";

export const getUser = async (id: string): Promise<IUser> => {
  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) throw new Error("User not found");

    const data = docSnap.data() as Omit<IUser, "uid">;
    return { uid: id, ...data } as IUser;
  } catch (e) {
    throw e;
  }
};
