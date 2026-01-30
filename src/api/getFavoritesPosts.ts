import { db } from "@/lib/firebase/app";
import type { IStory } from "@/types/user/user";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const getFavoritesPosts = async (ids: string[]) => {
  const q = query(collection(db, "posts"), where(documentId(), "in", ids));
  const snap = await getDocs(q);

  const posts = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return posts as IStory[];
};

export default getFavoritesPosts;
