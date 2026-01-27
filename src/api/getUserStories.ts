import { db } from "@/lib/firebase/app";
import { collection, getDocs, query, where } from "firebase/firestore";
import type { Story } from "@/types/user/user";

export const getUserStories = async (creatorUid: string): Promise<Story[]> => {
  try {
    const q = query(
      collection(db, "posts"),
      where("creator", "==", creatorUid)
    );
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data as Story[];
  } catch (e) {
    console.log("error:", e);
    return [];
  }
};
