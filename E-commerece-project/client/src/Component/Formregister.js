import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../App.css";
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, MenuItem, Container } from "react-bootstrap";

function Formregister() {
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState([]);

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  //? Credentialverify  function is called when user submit the button
  const credentialVerify = (event) => {
    event.preventDefault();
    

     const dataSend = {
      email: email,
      FirstName: FirstName,
      LastName: LastName,
      password: password,
    };
     const headers = new Headers();
    headers.append("content-type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(dataSend),
      redirect: "follow",
    };
     const request = new Request("https://yogaoutlet.herokuapp.com/api/customers", options);

    (async () => {
      const incomingdata = await fetch(request)
        .then((res) => {
          // TOdo catch error here
          window.location.href = "https://yogaoutlet.herokuapp.com/signin";
        })
        .then.catch((err) => console.log(err));
      

      setItems(incomingdata);
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
     })();
  };

  return (
    <div style={{ Height: "34rem", marginLeft: "0px", justifyContent: "left" }}>
      {
        <form style={{ width: "100% " }} method="POST" className="formstyle" onSubmit={credentialVerify}>
          <div style={{ paddingLeft: "0%", paddingRight: "5%", marginLeft: "0", marginRight: "2%" }} className="form-group row">
            {" "}
            <label style={{ paddingRight: "22%", display: "flex", whiteSpace: "nowrap", fontSize: "1.9rem" }} className="col-lg-3 col-form-label form-check-label" for="enterEmail">
              Email address
            </label>
            <div class="col-md-9">
              <input class="form-control" style={{ width: "25vw" }} type="text" placeholder="email" id="enterEmail" name="email" value={email} onChange={updateEmail} />
            </div>
          </div>

          <div style={{ paddingLeft: "0%", paddingRight: "5%", marginLeft: "0", marginRight: "2%" }} className="form-group row">
            <label for="firstName" style={{ paddingRight: "22%", display: "flex", whiteSpace: "nowrap", fontSize: "1.9rem" }} className="col-lg-3 col-form-label form-check-label">
              First Name
            </label>
            <div class="col-md-9">
              <input
                class="form-control"
                style={{ width: "25vw" }}
                type="text"
                placeholder="firstname"
                id="firstName"
                name="FirstName"
                value={FirstName}
                onChange={updateFirstName}
              />
            </div>
          </div>

          <div style={{ paddingLeft: "0%", paddingRight: "5%", marginLeft: "0", marginRight: "2%" }} className="form-group row">
            <label for="lastName" style={{ paddingRight: "22%", display: "flex", whiteSpace: "nowrap", fontSize: "1.9rem" }} className="col-lg-3 col-form-label form-check-label">
              Last Name
            </label>
            <div class="col-md-9">
              <input
                for="passwordRis"
                class="form-control"
                style={{ width: "25vw" }}
                type="text"
                placeholder="lastname"
                to="lastName"
                name="LastName"
                value={LastName}
                onChange={updateLastName}
              />
            </div>
          </div>
          <div style={{ paddingLeft: "0%", paddingRight: "5%", marginLeft: "0", marginRight: "2%" }} className="form-group row">
            <label for="password" style={{ paddingRight: "22%", display: "flex", whiteSpace: "nowrap", fontSize: "1.9rem" }} className="col-lg-3 col-form-label form-check-label">
              Password
            </label>
            <div class="col-md-9">
              <input class="form-control" style={{ width: "25vw" }} type="text" placeholder="Password" to="password" name="password" value={password} onChange={updatePassword} />
            </div>
          </div>

          <small id="passwordRis" class="form-text text-muted" style={{ paddingRight: "22%", display: "flex" }}>
            Password must contains atleast an alphabast, a number and sepeical charter in it
          </small>
          <div class="col-md-9" style={{ paddingLeft: "25%" }}>
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

export default Formregister;
