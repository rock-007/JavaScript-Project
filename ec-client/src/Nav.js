import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import ProjectLogo from "./Img/Yoga1.png";
import Search from "./Component/Search";
import history from "./history";
// import { useHistory } from "react-router-dom";
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, DropdownButton, MenuItem, Container } from "react-bootstrap";
// const initailDropdownOpen = () => {
//   return window.localStorage.getItem("user-DropdownOpen") || false;
// };
function Nav({ userinfo, userstatus }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [list, setList] = useState([1, 2, 3]);
  console.log("14xx", isDropdownOpen);
  // useEffect(() => {
  //   if (localStorage.getItem("user-DropdownOpen")) {
  //  //   setDropdownOpen(localStorage.getItem("user-DropdownOpen"));
  //   }
  // }, []);
  // let history = useHistory();
  // let history = useHistory();

  const toggleDropDown = (e) => {
    e.preventDefault();
    history.push("/signin");
history.go(0);
    console.log("18xx", e);
    // window.localStorage.setItem("user-DropdownOpen", !isDropdownOpen);
    setDropdownOpen((prevState) => !prevState);
  };

  const DropDownlist = () => {
    function dropDownItem(props) {
      return (
        <a href="#" className="menu-item">
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }

    return (
      <div className="dropdown1" style={{ height: "50px" }}>
        <dropDownItem>el</dropDownItem>
      </div>
    );
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
                onClick={(e) => toggleDropDown(e)}
              ></button>
            ) : (
              <button style={{ border: "none", background: "none", outline: "none" }} onClick={(e) => toggleDropDown(e)}>
                SIGNIN
              </button>
            )}
          </a>
        </li>
      </ul>
      {isDropdownOpen && <DropDownlist />}
    </nav>
  );
}

export default Nav;
