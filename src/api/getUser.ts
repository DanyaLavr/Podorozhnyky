import { db } from "@/lib/firebase/app";
import type { IUserBlock } from "@/types/user/user";
import { doc, getDoc } from "firebase/firestore";

export const getUser = async (id: string): Promise<IUserBlock | null> => {
  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) throw new Error("User not found");

    const data = docSnap.data() as Omit<IUserBlock, "uid">;
    return { uid: id, ...data };
  } catch (e) {
    console.log(e);
    return null;
  }
};
