// useState hold info that we get from an api and use Effect runs that fatch call when our component mount
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// whenver clicked shop then below function will be called
function Signin() {
  const [items, setItems] = useState([]);
  // whenerever there is a change in the render method <app>  it will triggert uaseeffect method
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data1 = await fetch("http://localhost:5000/api/customers");
    const items1 = await data1.json();

    console.log(data1);
    console.log(items1);
    console.log(items1.data);
    setItems(items1);
  };

  return (
    <div>
      <div> </div>

      <div>
        {/* this is to creat 2 dimension array having key value pair and then use
      .map on each 2 doimension array to extract key valuefrom it*/}
        {items.map((entry) => {
          let key = entry.email;
          let valuefirst = entry.firstName;
          let valuelast = entry.created_at;
          // or, instead of ^, you could also use define
          // the params as `([key, value]) => {`

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








// useState hold info that we get from an api and use Effect runs that fatch call when our component mount
import React, { useState, useEffect } from "react";
import "../App.css";

import { Link } from "react-router-dom";

// whenver clicked shop then below function will be called
function Signin() {
  // empty string as default initial parameter ('')
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const [items, setItems] = useState([]);

  const credentialVerify = async () => {
    const data1 = await fetch("http://localhost:5000/api/customers");
    const incomingdata = await data1.json();
    console.log(data1);

    console.log(incomingdata);
    console.log(incomingdata);
    console.log(incomingdata.data);

    console.log(name, password);
    setItems(incomingdata);
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
              // on change is as soon as you input text and take the cursoror away it will update
              onChange={updateName}
            />
            {/* /*we need to get the value that the usertyped import //we first make the
        reference to the input with name="xyz", this xyz once change happems
        will update with the user value and that user value will be passed to
        the Value{} which will be the acutal input value // we need to update
        the value using reference(name) and initial value as name as that will
        go out with // event.target when we submit the button // the value
        inside the iput is the actual thing that goes out to backend , on change is the trigging button along with the submit button*/}
            {/* // in the end the name is the actual thing that we need and it contains( the updated (value{}) ) */}

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
        Hi
        {items.map((entry) => {
          let key = entry.email;
          let valuefirst = entry.firstName;
          let valuelast = entry.created_at;
          // or, instead of ^, you could also use define
          // the params as `([key, value]) => {`
          console.log(entry);
          return (
            <p key={key}>
              {key}: {valuefirst}bb {valuelast}
            </p>
          );
        })}
      </div>
      <div>bye</div>
    </div>
  );
}

export default Signin;
