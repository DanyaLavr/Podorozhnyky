import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { fetchPosts } from "@/redux/posts/postsSlice";
import {
  selectAllPosts,
  selectPostsLoading,
} from "@/redux/posts/postsSelectors";
import StoryCard from "./StoryCard";
import styles from "./_StoryCard.module.scss";
import { createBem } from "@/utils/createBem";
import Loader from "@/components/ui/Loader";
import type { IStory } from "@/types/user/user";

const bem = createBem("storyCard__list", styles);
type Props = {
  category?: string;
  visibleCount: number;
};
export default function PopularStories({ category, visibleCount }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const posts = useSelector(selectAllPosts);
  const isLoading = useSelector(selectPostsLoading);

  useEffect(() => {
    if (!posts.length && !isLoading) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length, isLoading]);

  const filteredPosts = useMemo(() => {
    if (!category) return posts;

    return posts.filter((post: IStory) => post.category === category);
  }, [posts, category]);

  const visibleStories = useMemo(
    () => filteredPosts.slice(0, visibleCount),
    [filteredPosts, visibleCount]
  );

  return (
    <>
      <Loader loading={isLoading} />
      <ul className={bem()}>
        {visibleStories.map((post: IStory) => (
          <StoryCard key={post.id} data={post} />
        ))}
      </ul>
    </>
  );
}
