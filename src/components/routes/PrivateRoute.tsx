import { selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  pathTo: string;
  children: ReactNode;
}
const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/auth/login");
  }, [navigate]);

  return <>{children}</>;
};

export default PrivateRoute;
