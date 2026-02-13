import { Header } from "@/sections/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header variant="dark" />
      <main>
        <Outlet />
      </main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
