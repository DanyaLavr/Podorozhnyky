import getFavoritesPosts from "@/api/getFavoritesPosts";
import Button from "@/components/ui/Button";
import StoriesMessage from "@/components/ui/StoriesMessage";
import useAsync from "@/hooks/useAsync";
import type { IStory, IUser } from "@/types/user/user";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// const user = {
//   uid: "id-123456",
//   imageUrl:
//     "https://res.cloudinary.com/dizg6rj7g/image/upload/v1769524892/IMG_0717_bwjnt9",
//   displayName: "Danya Lavr",
//   favoritesPosts: [
//     { id: "cS8YdTRM1o2MY8cS8kju", data: 1 },
//     { id: "chqDjvte98jo1A963W32", data: 2 },
//     { id: "AGrISrdZjTcPMSXkqFIW", data: 10 },
//   ],
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros ipsum dolor sit amet,  ipsum dolor stem",
// };
interface IProps {
  user: IUser;
}
const ProfileFavoritePosts = ({ user }: IProps) => {
  const [searchParams, setSearchParmas] = useSearchParams();
  const page = searchParams.get("page");
  const [stories, setStories] = useState<IStory[]>([]);
  const { run, isLoading } = useAsync();
  const getIds = (page: number) => {
    if (!user.favoritePosts?.length) {
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
    <div>
      {stories.map((elem) => (
        <p>{elem.title}</p>
      ))}
      <Button variant="primary" onClick={handlePagination}>
        завантажити більше!
      </Button>
    </div>
  );
};

export default ProfileFavoritePosts;
