import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import BurgerIcon from "../../../public/icons/Menu.svg";
import CloseIcon from "../../../public/icons/Close.svg";
import Logo from "../../../public/icons/Logo.svg";
import LogoutIcon from "../../../public/icons/Logout.svg";

import styles from "./header.module.scss";
import { createBem } from "@/utils/createBem";
import Button from "@/components/ui/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/auth/selectors";
import { openLogoutModal } from "@/redux/ui/uiSlice";

const bem = createBem("header", styles);

interface IProps {
  content?: "full" | "abbreviated";
  variant?: "dark" | "light";
}
export const Header = ({ content = "full", variant = "light" }: IProps) => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const user = useAppSelector(selectUser);
  const isAuth = !!user?.uid;
  useEffect(() => {
    if (variant !== "dark") return;

    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);
  const currentBg =
    variant === "light" || isScrolled || isMenuOpen ? "light" : "dark";
  const currentColor =
    variant === "light" || isScrolled || isMenuOpen ? "dark" : "light";

  const colorStyles =
    currentColor === "light"
      ? `text-gray-50 fill-gray-50`
      : `text-gray-900 fill-gray-900`;
  const headerStyles =
    currentBg === "light"
      ? `bg-gray-50 text-gray-900`
      : `bg-transparent text-gray-50`;
  return (
    <header
      className={`section py-0! fixed w-full t-0 l-0 ${headerStyles} ${currentBg === "dark" ? bem("", { scrolled: isMenuOpen || isScrolled }) : ""}`}
    >
      <div className="container">
        <div className={bem("inner")}>
          <div className={bem("logo")}>
            <Logo />
            <span className={`${colorStyles} font-heading font-normal  `}>Подорожники</span>
          </div>
          {content === "full" && (
            <div className="flex gap-8 items-center">
              <nav className={bem("nav-desktop")}>
                <Link className={colorStyles} to="/">
                  Головна
                </Link>
                <Link className={colorStyles} to="/stories">
                  Історії
                </Link>
                <Link className={colorStyles} to="/travelers">
                  Мандрівники
                </Link>
                {isAuth && (
                  <Link className={colorStyles} to="/profile">
                    Мій профіль
                  </Link>
                )}
              </nav>

              <div className="flex gap-4">
                <div className={bem("actions")}>
                  {!isMenuOpen &&
                    (!isAuth ? (
                      <>
                        <Button className="py-1 px-2.5" pathTo="/auth/login">
                          Вхід
                        </Button>
                        <Button
                          className="py-1 px-2.5"
                          pathTo="/auth/register"
                          variant="primary"
                        >
                          Реєстрація
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          pathTo="/new-story"
                          variant="primary"
                          className="py-1 px-2.5"
                        >
                          Опублікувати історію
                        </Button>
                        <div
                          className={`flex gap-2 md:hidden xl:flex ${bem("user-block", { dark: currentColor === "dark", light: currentColor === "light" })}`}
                        >
                          <p className={bem("user")}>{user.displayName}</p>
                          <span
                            className={`block h-7 w-px  ${currentColor === "dark" ? "bg-gray-900/15" : "bg-gray-50/50"}`}
                          ></span>
                          <button onClick={() => dispatch(openLogoutModal())}>
                            <LogoutIcon />
                          </button>
                        </div>
                      </>
                    ))}
                </div>

                <button
                  className={`${currentColor} ${bem("burger", { open: isMenuOpen, dark: currentColor === "dark", light: currentColor === "light" })}`}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <CloseIcon /> : <BurgerIcon />}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={`section ${bem("mobile-menu", { open: isMenuOpen })} `}>
          <div className="container">
            <nav className={bem("mobile-nav")}>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Головна
              </Link>
              <Link to="/stories" onClick={() => setIsMenuOpen(false)}>
                Історії
              </Link>
              <Link to="/travelers" onClick={() => setIsMenuOpen(false)}>
                Мандрівники
              </Link>

              {!isAuth ? (
                <>
                  <Button
                    className={`py-1 px-2.5 ${bem("btn--ghost-mobile")}`}
                    pathTo="/auth/login"
                    variant="primary"
                  >
                    Вхід
                  </Button>
                  <Button
                    className="py-1 px-2.5 text-gray-50! dark:bg-blue-400!"
                    pathTo="/auth/register"
                    variant="primary"
                  >
                    Реєстрація
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/profile">Мій профіль</Link>
                  <button className="btn primary publish-btn-mobile">
                    Опублікувати історію
                  </button>

                  <div className={bem("user-menu")}>
                    <img
                      className="w-15 aspect-square rounded-full"
                      src={user.imageUrl}
                      alt={user.displayName}
                    />
                    <span className={bem("user-name")}>{user.displayName}</span>
                    <span className={bem("divider")} />
                    <button
                      className={bem("logout-btn")}
                      onClick={() => {
                        setIsMenuOpen(false);
                        dispatch(openLogoutModal());
                      }}
                    >
                      <LogoutIcon />
                    </button>
                  </div>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
