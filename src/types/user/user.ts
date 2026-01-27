export interface IUserBloack {
  uid: string;
  displayName: string;
  description?: string;
}
export interface Story {
  id: string;
  category: string;
  creator: string;
  creatorUid: string;
  description: string;
  imageUrl: string;
  story: string;
  title: string;
}
