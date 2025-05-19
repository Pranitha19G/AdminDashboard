import { useContext } from "react";
import { Navigate,Outlet } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";


const ProtectedRoutes = () => {
  const {message}=useContext(AuthContext)
      console.log("m",message)

  if (message==="failure") {
    console.log("m",message)
    return <Navigate to="/login" replace />
  }
    console.log("m",message)
  return <Outlet />;

};
export default ProtectedRoutes;
