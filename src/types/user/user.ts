import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export interface IUser {
  uid: string;
  displayName: string;
  imageUrl?: string;
  description?: string;
  favoritePosts?: string[];
}
export interface Story {
  id: string;
  category: string;
  createdAt: number;
  creator: string;
  creatorUid: string;
  description: string;
  imageUrl: string;
  story: string;
  title: string;
}
export type TGetUserStoriesResult = {
  stories: Story[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
};
