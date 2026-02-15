import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import Button from "../Button";
import { createBem } from "@/utils/createBem";
import styles from "./_StoryCard.module.scss";

import { useSavedStories } from "@/hooks/stories/useSavedStories";
import type { IStory } from "@/types/user/user";

const bem = createBem("storyCard__list", styles);

interface IProps {
  data: IStory;
  savedStories: ReturnType<typeof useSavedStories>;
}

export default function StoryCard({ data, savedStories }: IProps) {
  const {
    category,
    title,
    description,
    creatorName,
    createdAt,
    readTime,
    locationImage,
    creatorImage,
    id,
  } = data;

  const { isSaved, toggle } = savedStories;
  const [imgError, setImgError] = useState(false);

  const formatDate = (num: number) => new Date(num).toLocaleDateString("uk-UA");

  return (
    <li className={bem("item")}>
      <div className={bem("img-wrapper")}>
        {!locationImage || imgError ? (
          <div className={bem("img-fallback")}>
            <img
              src="/icons/image-placeholder.svg"
              alt="No image"
              loading="lazy"
            />
          </div>
        ) : (
          <img
            src={locationImage}
            alt={title}
            loading="lazy"
            className={bem("img")}
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div className={bem("item-content-wrapper")}>
        <h5 className={`${bem("region-info")} ${bem("text")}`}>{category}</h5>
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
              {formatDate(createdAt)}
              <span className={bem("dot")}> • </span>
              {readTime}
            </p>
          </div>
        </div>

        <div className={bem("item-btns-wrapper")}>
          <RouterLink to={`/stories/${id}`}>
            <Button
              variant="secondary"
              className={`${bem("button")} ${bem("button--see")}`}
            >
              Переглянути статтю
            </Button>
          </RouterLink>

          <Button
            variant="secondary"
            className={`${bem("button")} ${bem("button--save")}`}
            isActive={isSaved(id)}
            onClick={() => toggle(id)}
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
