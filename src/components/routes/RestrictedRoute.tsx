import { selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";
import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const RestrictedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  if (user) navigate("/");
  return <>{children}</>;
};

export default RestrictedRoute;
