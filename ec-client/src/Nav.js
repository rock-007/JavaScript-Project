import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import ProjectLogo from "./Img/Yoga1.png";
import Search from "./Component/Search";
import history from "./History";
import { withRouter } from "react-router";

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
    console.log("22df", history.push("/signin"));
    history.push("/signin");
    //  history.go(0);

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
          <Dropdown as={ButtonGroup} style={{ marginTop: "5px", position: "relative", float: "left", top: "13px" }}>
            <Button variant="success" href="./signin" style={{ background: "none", borderStyle: "none", outline: "none !important" }}>
              {userstatus ? (
                <button
                  style={{ border: "none", background: "none",outline: "none" }}
                  className=" signin-icon glyphicon glyphicon-user	
                "
                ></button>
              ) : (
                <button style={{ border: "none", background: "none", outline: "none" }}>SIGNIN</button>
              )}
            </Button>

            <Dropdown.Toggle
              className="signinDropdown"
              split
              variant="success"
              id="dropdown-split-basic"
              style={{  background: "none", borderStyle: "none", outline: "none !important" }}
            />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="active"
              onclick={(e) => {
                console.log("85cc", window.location.href);
                if (window.location.href != "./signin") {
                  return (window.location.href = "./signin");
                }
              }}
            >
              {userstatus ? (
                <button
                  style={{ border: "none", background: "none", outline: "none" }}
                  className=" signin-icon glyphicon glyphicon-user	
                "
                ></button>
              ) : (
                <button style={{ border: "none", background: "none", outline: "none" }}>SIGNIN</button>
              )}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          {/* 
          <a className="active" href="./signin">
            {userstatus ? (
              <button
                style={{ border: "none", background: "none", outline: "none" }}
                className=" signin-icon glyphicon glyphicon-user	
                "
              ></button>
            ) : (
              <button style={{ border: "none", background: "none", outline: "none" }}>SIGNIN</button>
            )}
          </a> */}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
