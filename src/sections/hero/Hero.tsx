import { createBem } from "@/utils/createBem";
import styles from "./hero.module.scss";
import H1 from "@/components/ui/H1";
import Button from "@/components/ui/Button";

const bem = createBem("hero", styles);

export const Hero = () => {
  return (
    <section className={`section ${bem()}`}>
      <div className="container">
        <div className={bem("content")}>
          <H1 position="left" className="">
            Відкрийте світ
            <br />
            подорожей з нами!
          </H1>

          <p className={bem("text")}>
            Приєднуйтесь до нашої спільноти мандрівників, де ви зможете ділитися
            своїми історіями та отримувати натхнення для нових пригод. Відкрийте
            для себе нові місця та знайдіть однодумців!
          </p>
          <Button
            pathTo="/register"
            variant="primary"
            className="py-2 mt-8 block w-full md:inline-block md:w-auto md:px-3"
          >
            Доєднатись
          </Button>
        </div>
      </div>
    </section>
  );
};
