import { Navigate } from "react-router-dom";
// import { Navbar } from "./index.js";

const RequireAuth = ({ children }) => {
  const loginToken = localStorage.getItem("details");

  return loginToken ? <>{children}</> : <Navigate to={"/login"} />;
};

export default RequireAuth;
