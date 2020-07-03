import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";

function Basket({ userinfo,userstatus}) {
  const [num, setNum] = useState();

  return (
    <div >
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
        <option value="4">{`The user email address is ${userinfo}${userstatus}`}</option>
      </select>
    </div>
  );
}

export default Basket;
