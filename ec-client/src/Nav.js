import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "White",
  };

  // if cookies are present then signin and change the signin to `${name of account holder}`

  return (
    <nav className="header">
      <div>
        <h2>
          <a href="/">UmairShop</a>
        </h2>
      </div>
      <div>
        <a href="./basket">Basket</a>
        <a href="/signin">Signin</a>
      </div>

      {/* <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li> about</li>
        </Link>
        <Link style={navStyle} to="/Shop">
          <li> Shop</li>
        </Link>
      </ul> */}
    </nav>
  );
}

export default Nav;
