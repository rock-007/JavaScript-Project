import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";

function Phones({ userinfo1, userinfo2 }) {
  const [num, setNum] = useState();

  return (
    <div className="App">
      <h1>{num}</h1>
      <select
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="">Select number</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">{`The user email address is ${userinfo1}${userinfo2}`}</option>
      </select>
    </div>
  );
}

export default Phones;
