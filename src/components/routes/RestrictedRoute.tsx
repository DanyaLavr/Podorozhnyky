import { selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const RestrictedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/");
  }, [navigate]);
  return <>{children}</>;
};

export default RestrictedRoute;
