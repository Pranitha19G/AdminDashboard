import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import AuthContext from "../AuthContext/AuthContext";

export default function Login() {
  const{inputprovider,setInputprovider}=useContext(AuthContext);

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
    setInputprovider(input)
  };
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
