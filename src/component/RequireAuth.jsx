import { Navigate } from "react-router-dom";
const RequireAuth = ({ children }) => {
  const loginToken = localStorage.getItem("details");

  return loginToken ? <>{children}</> : <Navigate to={"/login"} />;
};

export default RequireAuth;
