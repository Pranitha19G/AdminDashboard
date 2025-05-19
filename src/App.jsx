import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Components/Home/Home";
import User from "./Components/Users/User";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import ProtectedRoutes from "./Components/ProtectedRoute/ProtectedRoutes";
import AuthContextprovider from "./Components/AuthContext/AuthContextprovider";

function App() {
  return (
    <>
    <AuthContextprovider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            element={
              <div className="sidebardiv">
                <SideBar />
                <div className="maindiv">
                  <ProtectedRoutes />
                </div>
              </div>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </AuthContextprovider>
    </>
  );
}

export default App;
