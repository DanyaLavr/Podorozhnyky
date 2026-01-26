import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav>
      <ul className="flex ">
        <li className="flex-1 font-main text-md text-center has-[a.active]:border-b has-[a.active]:border-b-gray-900/15 transition desktop:text-md">
          <NavLink className="block w-full py-4" to={"/auth/register"}>
            Реєстрація
          </NavLink>
        </li>
        <li className="flex-1 font-main text-md text-center has-[a.active]:border-b has-[a.active]:border-b-gray-900/15 transition desktop:text-md">
          <NavLink className="block w-full py-4" to={"/auth/login"}>
            Вхід
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
