import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import ProjectLogo from "./Img/Yoga1.png";
import Search from "./Component/Search";
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, DropdownButton, MenuItem, Container } from "react-bootstrap";

function Nav({ userinfo, userstatus }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [list, setList] = useState([1, 2, 3]);

  const toggleDropDown = () => {
    setDropdownOpen (  !isDropdownOpen);
  };
  const DropDownlist = () => {
    list.map((el) =>{ 
      console.log("123",el)
      return <div>el</div>});
  };

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
              <button
                style={{ border: "none", background: "none", outline: "none" }}
                className=" signin-icon glyphicon glyphicon-user	
                "
                onClick={toggleDropDown}
              >
                {isDropdownOpen ? DropDownlist() : false}
              </button>
            ) : (
              <button style={{ border: "none", background: "none", outline: "none" }} onClick={toggleDropDown}>
                SIGNIN
              </button>
            )}
          </a>
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
