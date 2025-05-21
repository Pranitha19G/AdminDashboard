import React, { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import AuthContext from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import UserList from "../../Utils/UserList";

export default function Login() {
  const { inputprovider, setInputprovider, message } = useContext(AuthContext);
  const [message1, setMessage1] = useState("failure");
  const [role, setRole]=useState("")

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("etarget", e.target.value);
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log("d", input);
  };
  const Loginfun = () => {
    const user = UserList.find(
      (val) => val.email === input.email && val.password === input.password
    );
    setRole(user.role)
    localStorage.setItem("role", JSON.stringify(user.role))
    setMessage1(user ? "success" : "failure");
  };
  useEffect(()=>{
         console.log("user",role);
  },[role])


  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("logindetails", JSON.stringify(message1));

    if (message1 === "success") {
      navigate("/");
    }
  }, [message1]);

  return (
    <div className={styles.Login}>
      <div className={styles.loginContainer}>
        <h2>Login Page</h2>
        <input
          type="email"
          name="email"
          value={input.email}
          placeholder="enter your email id"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          value={input.password}
          placeholder="password"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => Loginfun()}>Login</button>
      </div>
    </div>
  );
}
