import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Components/Home/Home";
import User from "./Components/Users/User";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import ProtectedRoutes from "./Components/ProtectedRoute/ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="sidebardiv">
          <SideBar />
          <div className="maindiv">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoutes>
                    <Home />
                  </ProtectedRoutes>
                }
              />
              <Route path="/user" element={<User />} />
              {/* <Route path="/products" element={<Products />} /> */}
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
