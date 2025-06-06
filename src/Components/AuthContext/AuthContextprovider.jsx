import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import UserList from "../../Utils/UserList";

export default function AuthContextprovider({ children }) {
  const [inputProvider, setInputprovider] = useState([]);
  const[message, setMessage]=useState("failure")
  console.log("input", inputProvider);

  // useEffect(() => {
  //   const user = UserList.find(
  //     (val) =>
  //       val.email === inputProvider.email &&
  //       val.password === inputProvider.password
  //   );
  //   setMessage(user ? "success" : "failure")
  //   localStorage.setItem("logindetails",JSON.stringify(message))
  // }, [inputProvider]);



  return (
    <AuthContext.Provider value={{ inputProvider, setInputprovider,message }}>
      {children}
    </AuthContext.Provider>
  );
}
