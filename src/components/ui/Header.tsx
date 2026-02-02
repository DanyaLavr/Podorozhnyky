import { Link } from "react-router-dom";
import { useState } from "react";
import BurgerIcon from "../../../public/icons/Menu.svg";
import CloseIcon from "../../../public/icons/Close.svg";
import Logo from "../../../public/icons/Logo.svg";
import LogoutIcon from "../../../public/icons/Logout.svg";
import "../../styles/header.css";


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAuth = true;

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <Logo />Подорожники
        </div>
        <nav className="nav-desktop">
          <Link to="/">Головна</Link>
          <Link to="/stories">Історії</Link>
          <Link to="/travelers">Мандрівники</Link>

          {isAuth && <Link to="/profile">Мій профіль</Link>}
        </nav>

        <div className="header-actions">
          {!isAuth ? (
            <>
              <Link to="/login" className="btn ghost">Вхід</Link>
              <Link to="/register" className="btn primary">Реєстрація</Link>
            </>
          ) : (
            <>
              <button className="btn primary publish-btn">
                Опублікувати історію
              </button>
              <div className="user">Імʼя</div>
            </>
          )}

          <button className="burger" onClick={() => setMenuOpen(true)}>
            <BurgerIcon />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <div className="logo logo-mobile">
              <Logo />Подорожники
            </div>
            <button onClick={() => setMenuOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          <nav className="mobile-nav">
            <Link to="/">Головна</Link>
            <Link to="/stories">Історії</Link>
            <Link to="/travelers">Мандрівники</Link>

            {!isAuth ? (
              <>
                <Link to="/login" className="btn ghost-mobile">Вхід</Link>
                <Link to="/register" className="btn primary">Реєстрація</Link>
              </>
            ) : (
              <>
                <Link to="/profile">Мій Профіль</Link>
                <button className="btn primary">Опублікувати історію</button>
                <div className="user-menu">
                  <div className="avatar" />
                  <span className="user-name">Імʼя</span>
                  <span className="divider" />
                  <button className="logout-btn">
                    <LogoutIcon />
                  </button>
                </div>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
