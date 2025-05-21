import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./SideBar.module.css";

export default function SideBar() {
  const [active, setActive] = useState();
  const navigate = useNavigate();
  const Location = useLocation();
  console.log("location", Location.pathname);

  const role = JSON.parse(localStorage.getItem("role"));

  useEffect(() => {
    setActive(Location.pathname);
  }, [Location]);

  const logoutfun = () => {
    localStorage.removeItem("logindetails");
    navigate("/login");
  };

  return (
    <div className={style.sidebar}>
      <p className={style.adminlogo}>Admin</p>
      <div className={style.categories}>
        <ul className={style.links}>
          <li>
            <Link
              to="/"
              className={`${active === "/" ? style.activelink : ""}`}
            >
              Home
            </Link>
          </li>
          {role === "user" ? (
            " "
          ) : (
            <li>
              <Link
                to="/user"
                className={`${active === "/user" ? style.activelink : ""}`}
              >
                Users
              </Link>
            </li>
          )}
          {role === "admin" || "user" ? (
            ""
          ) : (
            <li>
              <Link
                to="/orders"
                className={`${active === "/orders" ? style.activelink : ""}`}
              >
                Orders
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/products"
              className={`${active === "/products" ? style.activelink : ""}`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`${active === "/settings" ? style.activelink : ""}`}
            >
              Settings
            </Link>
          </li>
          <li onClick={() => logoutfun()}>logout</li>
        </ul>
      </div>
    </div>
  );
}
