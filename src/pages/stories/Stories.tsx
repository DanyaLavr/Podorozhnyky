import { useState } from "react";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import styles from "./_Stories.module.scss";
import { createBem } from "@/utils/createBem";
import H1 from "../../components/ui/H1";
import SelectItem from "@/components/ui/SelectItem";
import PopularStories from "../../components/popular-stories/PopularStories";
import Button from "@/components/ui/Button";
import { useVisibleCount } from "../../hooks/stories/useVisibleCount";
import { useFilteredStories } from "@/hooks/stories/useFilteredStories";
import { selectAllPosts } from "@/redux/posts/postsSelectors";
const bem = createBem("stories-page", styles);

type Region = "Всі історії" | "Європа" | "Азія" | "Пустелі" | "Африка";

export default function Stories() {
  const regions: Region[] = [
    "Всі історії",
    "Європа",
    "Азія",
    "Пустелі",
    "Африка",
  ];

  const posts = useSelector(selectAllPosts);

  const [selectedRegion, setSelectedRegion] = useState<Region>("Всі історії");

  const { visibleCount, setVisibleCount } = useVisibleCount(9, 8, 9);

  const isMobile = window.innerWidth < 768;

  const handleAdd = () => {
    let increment = 0;
    if (window.innerWidth >= 1440) increment = 3;
    else if (window.innerWidth >= 768) increment = 2;
    else increment = 3;

    setVisibleCount((prev) => prev + increment);
  };

  const filteredPosts = useFilteredStories(
    posts,
    selectedRegion === "Всі історії" ? undefined : selectedRegion
  );

  const hasMore = visibleCount < filteredPosts.length;

  return (
    <section className={bem()}>
      <div className={`container ${bem("container")}`}>
        <H1 variant="dark" className={bem("title")}>
          Історії Мандрівників
        </H1>
        {isMobile ? (
          <div className={bem("dropdown-container")}>
            <h5 className={bem("dropdown__title")}>Категорії</h5>
            <Formik initialValues={{ category: "" }} onSubmit={() => {}}>
              <Form>
                <SelectItem
                  placeholder="Виберіть регіон"
                  options={regions.map((r) => ({ value: r, label: r }))}
                  onChoose={(val: string) => setSelectedRegion(val as Region)}
                  className={bem("dropdown")}
                />
              </Form>
            </Formik>
          </div>
        ) : (
          <div className={bem("button-container")}>
            {regions.map((r) => (
              <Button
                key={r}
                variant="secondary"
                isActive={selectedRegion === r}
                onClick={() => setSelectedRegion(r)}
                className={bem("button")}
              >
                {r}
              </Button>
            ))}
          </div>
        )}

        <PopularStories
          category={
            selectedRegion !== "Всі історії" ? selectedRegion : undefined
          }
          visibleCount={visibleCount}
        />
        {hasMore && (
          <Button
            variant="primary"
            className={bem("button--more")}
            onClick={handleAdd}
          >
            Показати ще
          </Button>
        )}
      </div>
    </section>
  );
}
