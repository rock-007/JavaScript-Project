import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";

function Basket({ userData, userstatus, basketItems1}) {
  const [num, setNum] = useState();
  console.log(basketItems1)

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
        <option value="4">{` ${userData}${userstatus}x ${basketItems1}`}</option>
      </select>
    </div>
  );
}

export default Basket;
