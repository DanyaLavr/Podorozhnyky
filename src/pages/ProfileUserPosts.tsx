import { getUserStories } from "@/api/user/getUserStories";
import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import StoryCard from "@/components/ui/popular-stories/StoryCard";
import StoriesMessage from "@/components/ui/StoriesMessage";
import useAsync from "@/hooks/useAsync";
import { selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";
import type { IStory, TGetUserStoriesResult } from "@/types/user/user";
import type { QueryDocumentSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

const ProfileUserPosts = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const lastDocRef = useRef<QueryDocumentSnapshot | null>(null);
  const user = useAppSelector(selectUser);
  const { run, isLoading } = useAsync();
  useEffect(() => {
    if (!user) {
      return;
    }
    const fetchData = async () => {
      if (stories.length) return;

      const result = await run<TGetUserStoriesResult>(() =>
        getUserStories(user.uid, null)
      );
      if (result) {
        setStories(result.stories);
        lastDocRef.current = result.lastDoc;
      }
    };
    fetchData();
  }, []);

  const handlePagination = async () => {
    if (!user) return;
    const result = await run<TGetUserStoriesResult>(() =>
      getUserStories(user.uid, lastDocRef.current)
    );
    if (result) {
      setStories((prev) => [...prev, ...result.stories]);
      lastDocRef.current = result.lastDoc;
    }
  };
  if (!stories.length && isLoading) {
    return <Loader cssOverride={{ marginTop: "20px" }} loading={isLoading} />;
  }
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
    <div className="flex flex-wrap gap-6 mt-10">
      {stories.map((elem) => (
        <StoryCard data={elem} key={elem.id} />
      ))}
      {isLoading && (
        <Loader cssOverride={{ marginTop: "20px" }} loading={isLoading} />
      )}
      {stories.length >= 6 && (
        <Button
          className="px-4 py-2"
          variant="primary"
          onClick={handlePagination}
        >
          Завантажити більше!
        </Button>
      )}
    </div>
  );
};

export default ProfileUserPosts;
