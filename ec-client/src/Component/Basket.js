import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";

function Basket({ userData, userstatus, basketItems }) {
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
        <option value="4">{`The user email address is ${userData}${userstatus} ${basketItems}`}</option>
      </select>
    </div>
  );
}

export default Basket;
