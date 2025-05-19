import React, { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState([]);

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
    setSubmit((prev) => [...prev, input]);
    console.log("s", submit);
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
