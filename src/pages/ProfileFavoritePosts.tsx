import { getUserStories } from "@/api/getUserStories";
import StoriesMessage from "@/components/ui/StoriesMessage";
import useAsync from "@/hooks/useAsync";
import type { IStory, TGetUserStoriesResult } from "@/types/user/user";
import type { QueryDocumentSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
const user = {
  uid: "id-123456",
  displayName: "Danylo Nutella",
  description:
    "lorem100lor em100lorem100l orem100lorem100lo rem100lorem10 0lorem100lorem10 0lorem 100 lorem1 00lor em100lor em100lore m100lorem100lorem100",
};
const ProfileFavoritePosts = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const lastDocRef = useRef<QueryDocumentSnapshot | null>(null);
  const { run, isLoading } = useAsync();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (stories.length) return;

        const result = await run<TGetUserStoriesResult>(() =>
          getUserStories(user.uid, null)
        );
        if (result) {
          setStories(result.stories);
        }
      } catch (e) {}
    };
    fetchData();
  }, []);

  const handlePagination = async () => {
    try {
      const result = await run<TGetUserStoriesResult>(() =>
        getUserStories(user.uid, lastDocRef.current)
      );
      if (result) {
        setStories((prev) => [...prev, ...result.stories]);
        lastDocRef.current = result.lastDoc;
      }
    } catch (e) {}
  };

  if (!stories.length) {
    return (
      <StoriesMessage
        text="У вас ще немає збережених історій, мершій збережіть вашу першу історію!"
        buttonContent="До історій"
        buttonLink="/stories"
      />
    );
  }
  return (
    <div>
      {stories.map((elem) => (
        <p>{elem.title}</p>
      ))}
    </div>
  );
};

export default ProfileFavoritePosts;
