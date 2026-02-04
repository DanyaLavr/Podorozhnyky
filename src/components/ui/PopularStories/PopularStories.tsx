import { useEffect, useState } from "react";
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
import Button from "../Button";

const bem = createBem("storyCard__list", styles);

export default function PopularStories() {
  const dispatch = useDispatch<AppDispatch>();

  const posts = useSelector(selectAllPosts);
  const isLoading = useSelector(selectPostsLoading);

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  useEffect(() => {
    const updateVisibleCount = () => {
      window.innerWidth >= 1440 ? setVisibleCount(3) : setVisibleCount(4);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visibleStories = posts.slice(0, visibleCount);

  if (isLoading) return <p>Завантаження...</p>;

  return (
    <section className={`${"section"} ${styles["section-stories"]}`}>
      <div className={`${"container"} ${styles["stories-container"]}`}>
        <ul className={bem()}>
          {visibleStories.map((post) => (
            <StoryCard key={post.id} data={post} />
          ))}
        </ul>

        {visibleCount < posts.length && (
          <Button
            variant="primary"
            className={bem("button--show")}
            onClick={() => setVisibleCount((prev) => prev + 3)}
          >
            Переглянути всі
          </Button>
        )}
      </div>
    </section>
  );
}
