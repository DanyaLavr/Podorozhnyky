import PopularStories from "../../components/ui/popular-stories/PopularStories";
import H2 from "@/components/ui/H2";
import { createBem } from "@/utils/createBem";
import styles from "./_PopularStories.module.scss";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useVisibleCount } from "@/hooks/stories/useVisibleCount";
const bem = createBem("popularStories", styles);

export default function PopularStoriesSection() {
  const navigate = useNavigate();
  const { visibleCount } = useVisibleCount(3, 4, 4);
  return (
    <section className={`section ${bem()}`}>
      <div className={"container"}>
        <H2 className={bem("title")}>Популярні історії</H2>
        <PopularStories visibleCount={visibleCount} />
        <Button
          variant="primary"
          className={bem("button--show")}
          onClick={() => navigate("/stories")}
        >
          Переглянути всі
        </Button>
      </div>
    </section>
  );
}
