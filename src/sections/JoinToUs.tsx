import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import H2 from "@/components/ui/H2";

import { createBem } from "@/utils/createBem";
import styles from "@/styles/_JoinToUs.module.scss";

const bem = createBem("joinToUs", styles);

export default function JoinToUs() {
  return (
    <section className="section">
      <div className="container">
        <div className={bem()}>
          <div className={bem("wrapper")}>
            <div className={bem("wrapper-text")}>
              <H2 variant="light" className={bem("title")}>
                Приєднуйтесь до нашої спільноти
              </H2>

              <p className={bem("description")}>
                Долучайтеся до мандрівників, які діляться своїми історіями та
                надихають на нові пригоди.
              </p>
            </div>

            <Link to="/auth/register" className={bem("link")}>
              <Button variant="primary" className={bem("button")}>
                Зареєструватися
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
