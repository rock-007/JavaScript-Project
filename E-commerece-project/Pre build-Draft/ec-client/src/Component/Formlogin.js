import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, MenuItem, Container } from "react-bootstrap";

import logo from "../logo.svg";
import "../App.css";

function Forlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState([]);

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // this is the function that will be called when the user submit the form and will passed the event as well
  const credentialVerify = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("event");

    //post construction, after the set name nad set password updated it will get send here
    const dataSend = { email: email, password: password, logout: false };
    // creating header to make sure we are sending the JSON format
    const headers = new Headers();
    headers.append("content-type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(dataSend), // here datassend is object so first convert the data into object before stingify
      // redirect: "follow",
      // we need to include credentails if not then the cookies will not be recieved or sent
      credentials: "include",
    };
    console.log(email);

    // const request = new Request("https://lid36d8wya.execute-api.eu-west-2.amazonaws.com/devopl", options);
    const request = new Request("https:/yogaoutlet.herokuapp.com/api/newuser", options);

    (async () => {
      const incomingdata = await fetch(request)
        .then((res) => {
          console.log(res);
          if (res.status >= 200 && res.status < 400) {
            window.location.href = "http://localhost:3000/";
            console.log(res);
          } else {
            console.log(res.status);
            console.log(res.json());
            console.log(res.location);
            return res.json();
          }
        })
        .then((body) => {
          return body;
        })
        .catch((err) => console.log("err"));
      // console.log(e);

      //  console.log(name, password);
      console.log(incomingdata);

      setItems(incomingdata);
      setEmail("");
      setPassword("");
      console.log(items);
    })();
  };

  return (
    <div style={{ paddingTop: "15%", marginLeft: "0px", justifyContent: "left" }}>
      {
        // <form method="POST" className="formstyle" onSubmit={credentialVerify}>

        <form method="POST" onSubmit={credentialVerify} className="form" role="form">
          <div style={{ paddingLeft: "5%", padding: "5%" }} className="form-group row">
            <label style={{ paddingRight: "22%", display: "flex", whiteSpace: "nowrap" }} className="col-lg-3 col-form-label form-check-label" for="enterEmail">
              Email address
            </label>
            <div class="col-md-9">
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="email"
                id="enterEmail"
                name="email"
                value={email}
                onChange={updateEmail}
                style={{ width: "140%" }}
              />
            </div>
          </div>

          <div style={{ paddingLeft: "5%", padding: "5%" }} className="form-group row">
            <label style={{ paddingRight: "22%" }} className="col-lg-3 col-form-label form-check-label" for="enterPassword ">
              Password
            </label>
            <div class="col-md-9">
              <input
                style={{}}
                type="text"
                placeholder="Password"
                class="form-control"
                name="password"
                id="enterPassword"
                value={password}
                onChange={updatePassword}
                style={{ width: "140%" }}
              />
            </div>
          </div>
          <div class="col-md-9" style={{ paddingLeft: "36%" }}>
            <ButtonGroup style={{ paddingTop: "3rem" }}>
              <Button
                className=" buttonBlock"
                variant="primary"
                type="submit"
                style={{ height: "3rem", paddingLeft: "16%", marginLeft: "0px", width: "12rem", justifyContent: "left" }}
              >
                Submit
              </Button>
            </ButtonGroup>
          </div>
        </form>
      }
    </div>
  );
}

export default Forlogin;
