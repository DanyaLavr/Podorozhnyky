import { Link as RouterLink } from "react-router-dom";
import Button from "../Button";
import { createBem } from "@/utils/createBem";
import styles from "./_StoryCard.module.scss";
import type { Post } from "@/redux/posts/postsSlice";

const bem = createBem("storyCard__list", styles);

interface IProps {
  data: Post;
}

export default function StoryCard({ data }: IProps) {
  const {
    region,
    title,
    description,
    creatorName,
    date,
    readTime,
    locationImage,
    creatorImage,
    id,
  } = data;

  return (
    <li className={bem("item")}>
      <div className={bem("img-wrapper")}>
        <img
          src={locationImage}
          alt={title}
          loading="lazy"
          className={bem("img")}
        />
      </div>

      <div className={bem("item-content-wrapper")}>
        <h5 className={`${bem("region-info")} ${bem("text")}`}>{region}</h5>
        <h3 className={`${bem("title")} ${bem("text")}`}>{title}</h3>
        <p className={`${bem("place-desc")} ${bem("text")}`}>{description}</p>

        <div className={bem("item-info")}>
          <div className={bem("author-img-wrapper")}>
            <img
              src={creatorImage}
              alt={creatorName}
              loading="lazy"
              className={bem("author-img")}
            />
          </div>
          <div className={bem("date-info")}>
            <h5 className={bem("author-title")}>{creatorName}</h5>
            <p className={bem("author-info")}>
              {date} <span className={bem("dot")}>•</span> {readTime}
            </p>
          </div>
        </div>

        <div className={bem("item-btns-wrapper")}>
          <RouterLink to={`/stories/${id}`}>
            <Button
              variant="primary"
              className={`${bem("button")} ${bem("button--see")}`}
            >
              Переглянути статтю
            </Button>
          </RouterLink>
          <Button
            variant="secondary"
            className={`${bem("button")} ${bem("button--save")}`}
          >
            <img
              src="/icons/save.svg"
              alt="save-icon"
              className={bem("icon-btn--save")}
            />
          </Button>
        </div>
      </div>
    </li>
  );
}
