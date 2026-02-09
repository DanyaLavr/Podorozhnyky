import "../../styles/hero.css";
import {Link} from "react-router-dom";

export const Hero = () => {
  return (
    <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Відкрийте світ<br />подорожей з нами!</h1>
            <p className="hero-text">
            Приєднуйтесь до нашої спільноти мандрівників, де ви зможете
            ділитися своїми історіями та отримувати натхнення для нових пригод. Відкрийте для себе нові місця та знайдіть однодумців!
            </p>
            <Link to="/register" className="btn-primary">
            Доєднатись
            </Link>
        </div>
        </div>
        
    </section>
  

  );
}