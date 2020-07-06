import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import ProjectLogo from "./Img/logo.svg";
import Search from "./Component/Search";

function Nav({ userinfo, userstatus }) {
  const navStyle = {
    color: "White",
  };

  // if cookies are present then signin and change the signin to `${name of account holder}`

  return (
    <nav>
       <label className="logo">
        <a href="/">
          <img src={ProjectLogo} />
          UmairShop
        </a>
      </label>

      <ul>
        <li className="searchbar">
        <Search/>

        </li>
        <li>
          <a
            className="active glyphicon glyphicon-shopping-cart
"
            href="./basket"
          ></a>
          <ul>
            <li>
              <a href="#">link1</a>
            </li>
            <li>
              <a href="#">link2</a>
            </li>
            <li>
              <a href="#">link3</a>
            </li>
            <li>
              <a href="#">link4</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="active" href="/signin">
            {userstatus ? (
              <a
                className="glyphicon glyphicon-user	
"
              ></a>
            ) : (
              <a>SIGNIN</a>
            )}

            {/* {userinfo2 ? <a class="glyphicon glyphicon-log-in">SIGNIN</a> : userinfo1} */}
          </a>
          <ul>
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