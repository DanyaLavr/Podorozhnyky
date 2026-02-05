import { useEffect, useState, useMemo } from "react";
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

  const [cardsPerView, setCardsPerView] = useState(4);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!posts.length && !isLoading) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length, isLoading]);

  useEffect(() => {
    const update = () => {
      const perView = window.innerWidth >= 1440 ? 3 : 4;
      setCardsPerView(perView);

      setVisibleCount((prev) => (prev === 0 ? perView : prev));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const visibleStories = useMemo(
    () => posts.slice(0, visibleCount),
    [posts, visibleCount]
  );

  if (isLoading) return <p>Завантаження...</p>;

  return (
    <section className={`section ${styles["section-stories"]}`}>
      <div className={`container ${styles["stories-container"]}`}>
        <ul className={bem()}>
          {visibleStories.map((post) => (
            <StoryCard key={post.id} data={post} />
          ))}
        </ul>

        {visibleCount < posts.length && (
          <Button
            variant="primary"
            className={bem("button--show")}
            onClick={() => setVisibleCount((prev) => prev + cardsPerView)}
          >
            Переглянути всі
          </Button>
        )}
      </div>
    </section>
  );
}
