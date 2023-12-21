import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputLoginHandler = (e) => {
    let { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      localStorage.setItem("details", JSON.stringify(loginData));
      navigate("/");
      Swal.fire({
        icon: "success",
        title: "yeah..!😊",
        text: "login successfully!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter email and password!",
      });
    }
  };

  useEffect(() => {
    const detail = localStorage.getItem("details");
    if (detail) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={loginData.email}
          onChange={inputLoginHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={loginData.password}
          onChange={inputLoginHandler}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Login;
