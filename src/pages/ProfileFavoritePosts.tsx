import getFavoritesPosts from "@/api/getFavoritesPosts";
import StoriesMessage from "@/components/ui/StoriesMessage";
import useAsync from "@/hooks/useAsync";
import type { IStory } from "@/types/user/user";
import { useEffect, useMemo, useState } from "react";

const user = {
  uid: "id-123456",
  imageUrl:
    "https://res.cloudinary.com/dizg6rj7g/image/upload/v1769524892/IMG_0717_bwjnt9",
  displayName: "Danya Lavr",
  favoritesPosts: [
    { id: "cS8YdTRM1o2MY8cS8kju", data: 1 },
    { id: "chqDjvte98jo1A963W32", data: 2 },
    { id: "AGrISrdZjTcPMSXkqFIW", data: 10 },
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros ipsum dolor sit amet,  ipsum dolor stem",
};
const ProfileFavoritePosts = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const { run, isLoading } = useAsync();
  const ids = useMemo(() => {
    return [...user.favoritesPosts]
      .sort((a, b) => b.data - a.data)
      .map((elem) => elem.id);
  }, [user.favoritesPosts]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (stories.length) return;
        console.log("ids :>> ", ids);
        const result = await run<IStory[]>(() => getFavoritesPosts(ids));
        console.log("result :>> ", result);
        if (result) {
          setStories(result);
        }
      } catch (e) {}
    };
    fetchData();
  }, []);

  const handlePagination = async () => {
    try {
      const result = await run<IStory[]>(() => getFavoritesPosts(ids));
      if (result) {
        setStories((prev) => [...prev, ...result]);
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
