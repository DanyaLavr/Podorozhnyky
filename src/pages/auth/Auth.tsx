import AuthNav from "@/components/auth/navigation/AuthNav";
// import Logo from "../../../public/icons/Logo.svg";
import { Outlet } from "react-router-dom";
const Auth = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div className="flex gap-0.5">
          {/* <Logo /> */}
          <span>Подорожники</span>
        </div>
      </header>
      <main className="flex-1">
        <section className="section">
          <div className="container">
            <AuthNav />
            <Outlet />
          </div>
        </section>
      </main>
      <footer className="seсtion py-7">
        <div className="container">
          <p className=" text-center text-main text-xs desktop:text-md">
            © 2025 Подорожники
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Auth;
