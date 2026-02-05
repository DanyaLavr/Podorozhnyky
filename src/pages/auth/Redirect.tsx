import { Navigate } from "react-router-dom";

const Redirect = () => {
  return <Navigate to="/auth/login" />;
};

export default Redirect;
