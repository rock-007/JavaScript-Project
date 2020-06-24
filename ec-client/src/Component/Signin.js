import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Signin() {
  // empty string as default initial parameter ('')
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState([]);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const credentialVerify = (event) => {
    event.preventDefault();
    console.log(event);

    console.log("event");

    (async () => {


      
      const incomingdata = await fetch("http://localhost:5000/api/customers")
        .then((res) => res.json())
        .catch((err) => err);
      // console.log(e);

      console.log(name, password);
      console.log(incomingdata);

      setItems(incomingdata);
      setName("");
      setPassword("");
    })();
  };
  return (
    <div>
      <div>
        {
          <form className="formstyle" onSubmit={credentialVerify}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={name}
              onChange={updateName}
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
      <div>
        {items.map((entry) => {
          let key = entry.email;
          let valuefirst = entry.password;
          let valuelast = entry.created_at;

          return (
            <p key={key}>
              {key}: {valuefirst} {valuelast}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default Signin;
