import getFavoritesPosts from "@/api/user/getFavoritesPosts";
import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import StoryCard from "@/components/popular-stories/StoryCard";
import StoriesMessage from "@/components/ui/StoriesMessage";
import useAsync from "@/hooks/useAsync";
import { selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";
import type { IStory } from "@/types/user/user";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProfileFavoritePosts = () => {
  const [searchParams, setSearchParmas] = useSearchParams();
  const page = searchParams.get("page");
  const [stories, setStories] = useState<IStory[]>([]);
  const user = useAppSelector(selectUser);
  const { run, isLoading } = useAsync();
  const getIds = (page: number) => {
    if (!user || !user.favoritePosts?.length) {
      return [];
    }
    const postsCount = 6;

    return [...user.favoritePosts]
      .sort((a, b) => b.data - a.data)
      .map((elem) => elem.id)
      .slice((page - 1) * postsCount, page * postsCount);
  };

  useEffect(() => {
    setSearchParmas({ page: "1" });
    const fetchData = async () => {
      try {
        if (stories.length) return;
        const result = await run<IStory[]>(() => getFavoritesPosts(getIds(1)));
        if (result) {
          setStories(result);
        }
      } catch (e) {}
    };
    fetchData();
  }, [setSearchParmas, setStories]);

  const handlePagination = async () => {
    setSearchParmas({ page: String(Number(page) + 1) });
    try {
      const result = await run<IStory[]>(() =>
        getFavoritesPosts(getIds(Number(page) + 1))
      );
      if (result) {
        setStories((prev) => [...prev, ...result]);
      }
    } catch (e) {}
  };
  if (!stories.length && isLoading) {
    return <Loader cssOverride={{ marginTop: "20px" }} loading={isLoading} />;
  }
  if (!stories.length && !isLoading) {
    return (
      <StoriesMessage
        text="У вас ще немає збережених історій, мершій збережіть вашу першу історію!"
        buttonContent="До історій"
        buttonLink="/stories"
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

export default ProfileFavoritePosts;
