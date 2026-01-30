import AuthNav from "@/components/auth/navigation/AuthNav";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header/> */}
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
