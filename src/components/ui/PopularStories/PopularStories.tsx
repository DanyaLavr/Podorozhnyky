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
import type { Post } from "@/redux/posts/postsSlice";
import { useSavedStories } from "@/hooks/Stories/useSavedStories";
import Loader from "@/components/ui/Loader";

const bem = createBem("storyCard__list", styles);
type Props = {
  region?: string;
  visibleCount: number;
};
export default function PopularStories({ region, visibleCount }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const posts = useSelector(selectAllPosts);
  const isLoading = useSelector(selectPostsLoading);

  const savedStories = useSavedStories();

  useEffect(() => {
    if (!posts.length && !isLoading) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length, isLoading]);

  const filteredPosts = useMemo(() => {
    if (!region) return posts;

    return posts.filter((post: Post) => post.region === region);
  }, [posts, region]);

  const visibleStories = useMemo(
    () => filteredPosts.slice(0, visibleCount),
    [filteredPosts, visibleCount]
  );

  console.log(posts);

  return (
    <>
      <Loader loading={isLoading} />
      <ul className={bem()}>
        {visibleStories.map((post: Post) => (
          <StoryCard key={post.id} data={post} savedStories={savedStories} />
        ))}
      </ul>
    </>
  );
}
