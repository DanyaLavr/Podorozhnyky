import { db } from "@/lib/firebase/app";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import type { Story } from "@/types/user/user";

export const getUserStories = async (creatorUid: string): Promise<Story[]> => {
  try {
    const q = query(
      collection(db, "posts"),
      where("creator", "==", creatorUid),
      limit(6)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Story[];
  } catch (e) {
    console.log("error:", e);
    return [];
  }
};
