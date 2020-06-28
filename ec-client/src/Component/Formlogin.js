import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import "../App.css";

function Formregister() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState([]);

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const credentialVerify = (event) => {
    event.preventDefault();
    console.log(event);

    console.log("event");

    //post construction, after the set name nad set password updated it will get send here
    const dataSend = { Email: Email, password: password };
    // creating header to make sure we are sending the JSON format
    const headers = new Headers();
    headers.append("content-type", "application/json");

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(dataSend), // here datassend is object
     // redirect: "follow",
      credentials:"include"
    };
    console.log(Email);

    const request = new Request("http://localhost:5000/api/newuser", options);

    (async () => {
      const incomingdata = await fetch(request)
        .then((res) => {
          console.log(res);
          if (res.status >= 200 && res.status < 400) {
            window.location.href = "http://localhost:3000/";
            console.log(res);
          } else {
            console.log(res.status);
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
    <div>
      {
        <form method="POST" className="formstyle" onSubmit={credentialVerify}>
          <input
            type="text"
            placeholder="Email"
            name="Email"
            value={Email}
            onChange={updateEmail}
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
