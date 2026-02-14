import { Link } from "react-router-dom";
import "./_footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo-content">
        <div className="footer-logo">
          <Link className="logoContainer" to="/">
            <img
              className="logoContainer__logo"
              src="/icons/Logo.svg"
              alt="Leaf"
            />
            Подорожники
          </Link>
        </div>


        <ul className="nav-list">
          <li className="nav-list__item">
            <Link to="/">Головна</Link>
          </li>
          <li className="nav-list__item">
            <Link to="/stories">Історії</Link>
          </li>
          <li className="nav-list__item">
            <Link to="/travelers">Мандрівники</Link>
          </li>
        </ul>

        <ul className="Social-list">
          <li>
            <a href="https://www.facebook.com" aria-label="Facebook">
              <img className="Social-list__logo" src="/icons/Facebook.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <img className="Social-list__logo" src="/icons/Instagram.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.x.com" aria-label="X">
              <img className="Social-list__logo" src="/icons/X.svg" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" aria-label="YouTube">
              <img className="Social-list__logo" src="../../../public/icons/YouTube.svg" />
            </a>
          </li>
        </ul>
      </div>

      <span className="line" />

      <p className="rights">© 2025 Подорожники. Усі права захищені.</p>
    </footer>
  );
}
