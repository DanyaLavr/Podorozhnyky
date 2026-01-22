import Button from "../Button";

import { createBem } from "@/utils/createBem";
import styles from "./JoinToUs.module.css";

const bem = createBem("joinToUs", styles);

export default function JoinToUs() {
  return (
    <section className="section">
      <div className="container">
        <div className={bem()}>
          <h2 className={bem("title")}>Приєднуйтесь до нашої спільноти</h2>

          <p className={bem("description")}>
            Долучайтеся до мандрівників, які діляться своїми історіями та
            надихають на нові пригоди.
          </p>

          <Button variant="primary" onClick={() => {}}>
            Зареєструватися
          </Button>
        </div>
      </div>
    </section>
  );
}
