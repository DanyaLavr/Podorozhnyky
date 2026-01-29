import { db } from "@/lib/firebase/app";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  QueryDocumentSnapshot,
  startAfter,
  where,
  type DocumentData,
} from "firebase/firestore";
import type { Story, TGetUserStoriesResult } from "@/types/user/user";

export const getUserStories = async (
  creatorUid: string,
  lastElem: QueryDocumentSnapshot<DocumentData> | null
): Promise<TGetUserStoriesResult> => {
  try {
    const constraints: QueryConstraint[] = [
      where("creator", "==", creatorUid),
      orderBy("createdAt", "desc"),
      limit(2),
    ];
    if (lastElem) {
      constraints.push(startAfter(lastElem));
    }

    const q = query(collection(db, "posts"), ...constraints);
    const snapshot = await getDocs(q);
    const stories = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];
    return {
      stories: stories as Story[],
      lastDoc,
    };
  } catch (e) {
    console.log("error:", e);
    return {
      stories: [],
      lastDoc: null,
    };
  }
};
