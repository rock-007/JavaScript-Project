import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "White",
  };

  return (
    <nav className="navcolor">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li> about</li>
        </Link>
        <Link style={navStyle} to="/Shop">
          <li> Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
