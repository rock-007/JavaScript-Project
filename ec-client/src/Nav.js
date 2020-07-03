import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Nav({ userinfo, userstatus }) {
  const navStyle = {
    color: "White",
  };

  // if cookies are present then signin and change the signin to `${name of account holder}`

  return (
    <nav>
      <div className="logo">
        {" "}
        <a href="/">UmairShop</a>
      </div>

      <ul>
        <li>
          <a href="./basket">Basket</a>
        </li>
        <li>
          <a href="/signin">
              {userstatus ? <a className="glyphicon glyphicon-user	
" ></a> : <a >SIGNIN</a>}

           {/* {userinfo2 ? <a class="glyphicon glyphicon-log-in">SIGNIN</a> : userinfo1} */}
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
