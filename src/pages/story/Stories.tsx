import { useState } from "react";
import styles from "./_Stories.module.scss";
import { createBem } from "@/utils/createBem";
import H1 from "../../components/ui/H1";
import PopularStories from "@/components/ui/PopularStories/PopularStories";
import Button from "@/components/ui/Button";
import { useVisibleCount } from "@/hooks/Stories/useVisibleCount";
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

  const [selectedRegion, setSelectedRegion] = useState<Region>("Всі історії");

  const { visibleCount, setVisibleCount } = useVisibleCount(9, 8, 9);

  const handleAdd = () => {
    let increment = 0;
    if (window.innerWidth >= 1440) increment = 3;
    else if (window.innerWidth >= 768) increment = 2;
    else increment = 3;

    setVisibleCount((prev) => prev + increment);
  };
  return (
    <section className={bem()}>
      <div className="container">
        <H1 variant="dark" className={bem("title")}>
          Історії Мандрівників
        </H1>

        <div className={bem("button-container")}>
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRegion(r)}
              className={`${selectedRegion === r ? styles.active : ""} ${bem("button")}`}
            >
              {r}
            </button>
          ))}
        </div>

        <PopularStories
          region={selectedRegion !== "Всі історії" ? selectedRegion : undefined}
          visibleCount={visibleCount}
        />
        <Button
          variant="primary"
          className={bem("button--more")}
          onClick={handleAdd}
        >
          Показати ще
        </Button>
      </div>
    </section>
  );
}
