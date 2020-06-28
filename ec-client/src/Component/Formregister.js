import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../App.css";

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

    const request = new Request("http://localhost:5000/api/customers", options);

    (async () => {
      const incomingdata = await fetch(request)
        .then((res) => {
          window.location.href = res.url;
        })
        .catch((err) => console.log(err));
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
    <div>
      {
        <form method="POST" className="formstyle" onSubmit={credentialVerify}>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />

          <input
            type="text"
            placeholder="firstname"
            name="FirstName"
            value={FirstName}
            onChange={updateFirstName}
          />
          <input
            type="text"
            placeholder="lastname"
            name="LastName"
            value={LastName}
            onChange={updateLastName}
          />

          <input
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
          <button type="submit">Submit</button>
        </form>
      }
    </div>
  );
}

export default Formregister;
