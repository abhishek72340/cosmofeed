import "../../App.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Navbar = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("details");
    navigate("/login");
    Swal.fire({
      icon: "success",
      title: "yes",
      text: "logout successfully!",
    });
  };
  return (
    <div className="navbar">
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Navbar;
