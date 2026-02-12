import { selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectUser);
  console.log(user);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/auth/login");
  }, [navigate, user]);

  return <>{children}</>;
};

export default PrivateRoute;
