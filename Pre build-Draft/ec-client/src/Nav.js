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
function Nav({ userinfo, userstatus, finalBuy }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  let productItemInCart = finalBuy.length;

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
  console.log("eedr1", userinfo);
  let y111;
  // if cookies are present then signin and change the signin to `${name of account holder}`
  const delete_cookie = () => {
    console.log("eedrxc", userinfo);
    const dataSend = { email: userinfo[0].email || null, password: userinfo[0].password || null, logout: true };
    const headers = new Headers();
    headers.append("content-type", "application/json");
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(dataSend),
      credentials: "include",
    };
    console.log("deleet", dataSend);

    // const request = new Request(" https://lid36d8wya.execute-api.eu-west-2.amazonaws.com/devopl", options);
    const request = new Request("https:/yogaoutlet.herokuapp.com/api/newuser", options);

    (async () => {
      const incomingdata = await fetch(request)
        .then((res) => {
          console.log("1112s", res);

          if (res.status > 200 && res.status < 400) {
            console.log("jhhg", res);
          } else {
            console.log("2345", res);

            console.log(res.status);
            //console.log(res.json());
            console.log(res.location);
            console.log("fgghj", res.header);
            return res.json();
            //return res;
          }
        })
        .then((body) => {
          console.log("sddf2", body);
          window.localStorage.removeItem("user-status");
          window.localStorage.removeItem("user-data");
          window.localStorage.removeItem("buyNowFinal");
          window.location.href = "http://localhost:3000/";
          return body;
        });
    })();
    // window.location.href = "http://localhost:3000/";
  };

  return (
    <nav className="header">
      <label className="logo">
        <a href="/">
          <img className="yoga-image" src={ProjectLogo} />
        </a>
      </label>

      <ul>
        <li>
          <a href="./basket">
            <i className="fa" style={{ "font-size": "24px" }} href="./basket">
              &#xf07a;
            </i>
            <span class="badge badge-warning" id="lblCartCount">
              {productItemInCart}
            </span>
          </a>
        </li>
        <li className="myList">
          <Dropdown
            as={ButtonGroup}
            style={{
              marginTop: "5px",
              position: "relative",
              float: "left",
              top: "13px",
              height: "3rem",
              outline: "none !important",
              borderStyle: "none",
              border: "none !important",
              background: "none",
            }}
          >
            <Button variant="success" href="./signin" style={{ background: "none", borderStyle: "none", borderStyle: "none", outline: "none  " }}>
              {userstatus ? (
                <i
                  style={{ fontSize: "24px", border: "none", color: "white", background: "none", outline: "none" }}
                  className=" fas fa-user-circle	
                "
                ></i>
              ) : (
                <i
                  style={{
                    "border": "none",
                    "color": "white",
                    "background": "none",
                    "outline": "none",
                    "font-size": "1.8rem",
                    "fontFamily": "Roboto",
                    "textTransform": "none",
                    "marginLeft": "-3rem",
                  }}
                >
                  Sign in/ Register
                </i>
              )}
            </Button>

            <Dropdown.Toggle variant="success" aria-expanded="true" style={{ marginTop: "0.4rem", background: "none", borderStyle: "none", outline: "none  " }} />

            <Dropdown.Menu style={{ background: "white" }}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Account details</Dropdown.Item>
              <Dropdown.Item
                style={{ backgroundColor: "white" }}
                // href="/signin"
                onClick={(e) => {
                  console.log("123x1");
                  delete_cookie();
                  // delete_cookie(, () => {
                  //   console.log("dffg5667");
                  //   //                   window.localStorage.removeItem("buyNowFinal");
                  //   //              //      window.localStorage.removeItem("user-data");
                  //   //                                 window.localStorage.removeItem("user-status");
                  //   //                                 window.localStorage.removeItem("user-basket");
                  //   //
                  // });
                }}
              >
                Log Out
              </Dropdown.Item>
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