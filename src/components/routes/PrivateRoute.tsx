import { selectAuthIsLoading, selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";
import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../ui/Loader";

interface IProps {
  pathTo?: string;
  children: ReactNode;
}
const PrivateRoute = ({ pathTo = "/auth/login", children }: IProps) => {
  const user = useAppSelector(selectUser);
  const isLoading = useAppSelector(selectAuthIsLoading);

  if (isLoading) return <Loader loading={isLoading} />;
  return user ? <>{children}</> : <Navigate to={pathTo} />;
};

export default PrivateRoute;
