import { getUserStories } from "@/api/getUserStories";
import Button from "@/components/ui/Button";
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
const ProfileUserPosts = () => {
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
          lastDocRef.current = result.lastDoc;
        }
      } catch (e) {}
    };
    fetchData();
  }, []);

  const handlePagination = async () => {
    console.log("lastDocRef.current :>> ", lastDocRef.current);
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

  if (!stories.length && !isLoading) {
    return (
      <StoriesMessage
        text="Ви ще нічого не публікували, поділіться своєю першою історією!"
        buttonContent="Опублікувати історію"
        buttonLink="/new-post"
      />
    );
  }
  return (
    <div>
      {stories.map((elem) => (
        <p>{elem.title}</p>
      ))}
      {isLoading && "Loading..."}
      <Button variant="primary" onClick={handlePagination}>
        завантажити більше!
      </Button>
    </div>
  );
};

export default ProfileUserPosts;
