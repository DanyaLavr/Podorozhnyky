import { Navigate } from "react-router-dom";

const Redirect = ({ path }: { path: string }) => {
  return <Navigate to={path} />;
};

export default Redirect;
