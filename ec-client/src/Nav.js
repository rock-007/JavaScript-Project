import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import ProjectLogo from "./Img/Yoga1.png";
import Search from "./Component/Search";
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, DropdownButton, MenuItem, Container } from "react-bootstrap";

function Nav({ userinfo, userstatus }) {
  const navStyle = {
    color: "White",
  };

  // if cookies are present then signin and change the signin to `${name of account holder}`

  return (
    <nav className="header">
      <label className="logo">
        <a href="/">
          <img className="yoga-image" src={ProjectLogo} />
        </a>
      </label>

      <ul>
        <li>
          <a
            className="glyphicon glyphicon-shopping-cart
"
            href="./basket"
          ></a>
        </li>
        <li>
          <a className="active" href="/signin">
            {userstatus ? (
              <a
                className=" signin-icon glyphicon glyphicon-user	
"
              ></a>
            ) : (
              <a>SIGNIN</a>
            )}
          </a>
          <ul aria-labelledby="dropdownMenu">
            <li>
              <a href="#">link5</a>
            </li>
            <li>
              <a href="#">link6</a>
            </li>
            <li>
              <a href="#">link7</a>
            </li>
            <li>
              <a href="#">link8</a>
            </li>
          </ul>
        </li>
      </ul>

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
