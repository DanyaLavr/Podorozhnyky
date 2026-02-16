import { selectUser } from "@/redux/auth/selectors";
import { useAppSelector } from "@/redux/hooks";
import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(selectUser);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default RestrictedRoute;
