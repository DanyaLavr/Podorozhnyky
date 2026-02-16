import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import {
  selectAllPosts,
  selectPostsLoading,
} from "../../redux/posts/postsSelectors";
import { fetchPosts } from "../../redux/posts/postsSlice";
import "./_historia.scss";
import PopularStories from "../PopularStories/PopularStories";

export default function Historia() {
  const { storyNumber } = useParams();
  const id = storyNumber;

  const dispatch = useAppDispatch();

  const posts = useSelector(selectAllPosts);
  const isLoading = useSelector(selectPostsLoading);

  useEffect(() => {
    if (!posts.length && !isLoading) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length, isLoading]);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <section className="historia">
      <div className="historia-content">
        <h2 className="historia-title">{post.title}</h2>
        <div className="historia-details">
          <div className="historia-text">
            <p className="historia-author">
              <span className="heading">Автор статті</span> {post.creatorName}
            </p>
            <p className="historia-date">
              <span className="heading">Опубліковано</span> {formattedDate}
            </p>
          </div>
          <div className="continent-block">
            <p className="continent-block__name">{post.category}</p>
          </div>
        </div>
        <img
          src={post.locationImage}
          alt={post.title}
          className="historia-image"
        />
        <div className="text-block">
          <p className="historia-description">{post.description}</p>

        <div className="save-story">
          <h3 className="save-story__title">Зберегти історію</h3>
          <p className="save-story__description">
            Вона буде доступна у вашому профілі у розділі збережене
          </p>
          <button className="save-story__button">Зберегти</button>
        </div>
        </div>
      </div>
      <PopularStories />
    </section>
  );
}
