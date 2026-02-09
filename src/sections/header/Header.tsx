import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import BurgerIcon from "../../../public/icons/Menu.svg";
import CloseIcon from "../../../public/icons/Close.svg";
import Logo from "../../../public/icons/Logo.svg";
import LogoutIcon from "../../../public/icons/Logout.svg";

import styles from "./header.module.scss";
import { createBem } from "@/utils/createBem";
import Button from "@/components/ui/Button";

const bem = createBem("header", styles);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isAuth = true; 

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${menuOpen || scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className={bem("inner")}>

          
          <div className={bem("logo")}>
            <Logo />
            <span>Подорожники</span>
          </div>

          <nav className={bem("nav-desktop")}>
            <Link to="/">Головна</Link>
            <Link to="/stories">Історії</Link>
            <Link to="/travelers">Мандрівники</Link>
            {isAuth && <Link to="/profile">Мій профіль</Link>}
          </nav>

          <div className="flex gap-4">
            <div className={bem("actions")}>
            {!isAuth ? (
              <>
                <Button pathTo="/login">Вхід</Button>
                <Button pathTo="/register" variant="primary">Реєстрація</Button>
              </>
            ) : (
              <>
                <Button pathTo="/new-story" variant="primary">Опублікувати історію</Button>
                <p className="user">Імʼя</p>
              </>
            )}
          </div>

         
          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <BurgerIcon />}
          </button>
          </div>
          

        </div>

        
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
            <Link to="/" onClick={() => setMenuOpen(false)}>Головна</Link>
            <Link to="/stories" onClick={() => setMenuOpen(false)}>Історії</Link>
            <Link to="/travelers" onClick={() => setMenuOpen(false)}>Мандрівники</Link>

            {!isAuth ? (
              <>
                <Link to="/login" className="btn ghost-mobile">Вхід</Link>
                <Link to="/register" className="btn primary">Реєстрація</Link>
              </>
            ) : (
              <>
                <Link to="/profile">Мій профіль</Link>
                <button className="btn primary publish-btn-mobile">Опублікувати історію</button>

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
      </div>
    </header>
  );
};
