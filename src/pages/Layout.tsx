import { Header } from "@/sections/header/Header";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  const variant = pathname === "/" ? "dark" : "light";

  return (
    <>
      <Header variant={variant} />
      <main>
        <Outlet />
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
