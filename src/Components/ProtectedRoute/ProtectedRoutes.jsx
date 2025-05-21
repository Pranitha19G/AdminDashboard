import { Navigate,Outlet } from "react-router-dom";


const ProtectedRoutes = () => {
 const Msg= JSON.parse(localStorage.getItem("logindetails"))
  if (Msg==="success") {
      return <Outlet />;

  }
      return <Navigate to="/login" replace />


};
export default ProtectedRoutes;
