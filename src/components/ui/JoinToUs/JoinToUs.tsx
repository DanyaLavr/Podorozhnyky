import Container from "../Container";
import Button from "../Button";
import H2 from "../H2";

import { createBem } from "@/utils/createBem";
import styles from "./JoinToUs.module.css";

const bem = createBem("joinToUs", styles);

export default function JoinToUs() {
  return (
    <section>
      <Container>
        <div className={bem()}>
          <H2>Приєднуйтесь до нашої спільноти</H2>

          <p className={bem("description")}>
            Долучайтеся до мандрівників, які діляться своїми історіями та
            надихають на нові пригоди.
          </p>

          <Button variant="primary" onClick={() => {}}>
            Зареєструватися
          </Button>
        </div>
      </Container>
    </section>
  );
}
