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

  const credentialVerify = (event) => {
    event.preventDefault();
    console.log(event);

    console.log("event");
//hi
    //post construction
    const dataSend = {
      email: email,
      FirstName: FirstName,
      LastName: LastName,
      password: password,
    };
    // creating header to make sure we are sending the JSON format
    const headers = new Headers();
    headers.append("content-type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(dataSend),
      redirect: "follow",
    };

    const request = new Request("https:/yogaoutlet.herokuapp.com/api/customers", options);

    (async () => {
      const incomingdata = await fetch(request)
        .then((res) => {
          window.location.href = res.url;
        })
        .then.catch((err) => console.log(err));
      // console.log(e);

      //  console.log(name, password);
      console.log(incomingdata);

      setItems(incomingdata);
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      console.log(items);
    })();
  };

  return (
    <div style={{ Height: "34rem", width: "32rem", marginLeft: "0px", justifyContent: "left" }}>
      {
        <form style={{ width: "100%" }} method="POST" className="formstyle" onSubmit={credentialVerify}>
          <div className="form-group">
            <label for="enterEmail" style={{ fontSize: "1.9rem" }}>
              Email address
            </label>
            <input class="form-control" style={{ width: "40rem" }} type="text" placeholder="email" id="enterEmail" name="email" value={email} onChange={updateEmail} />
          </div>
          <label for="firstName" style={{ fontSize: "1.9rem" }}>
            First Name
          </label>
          <input class="form-control" style={{ width: "40rem" }} type="text" placeholder="firstname" id="firstName" name="FirstName" value={FirstName} onChange={updateFirstName} />
          <label for="lastName" style={{ fontSize: "1.9rem" }}>
            Last Name
          </label>
          <input
            for="passwordRis"
            class="form-control"
            style={{ width: "40rem" }}
            type="text"
            placeholder="lastname"
            to="lastName"
            name="LastName"
            value={LastName}
            onChange={updateLastName}
          />
          <label for="password" style={{ fontSize: "1.9rem" }}>
            Password
          </label>

          <input class="form-control" style={{ width: "40rem" }} type="text" placeholder="Password" to="password" name="password" value={password} onChange={updatePassword} />
          <small id="passwordRis" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
          <ButtonGroup style={{ paddingTop: "3rem" }}>
            <Button className=" buttonBlock" variant="primary" type="submit" style={{ height: "3rem", width: "40rem", marginLeft: "0px", justifyContent: "left" }}>
              Submit
            </Button>
          </ButtonGroup>
        </form>
      }
    </div>
  );
}

export default Formregister;
