import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";

function Basket({ basketItems }) {
  const [num, setNum] = useState();



  return (
    <div >
      {/* <h1>{num}</h1>
      <select
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="">Select number</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">{`  ${items}`}</option>

        
      </select> */}
      {`  ${basketItems}`}
    </div>
  );
}

export default Basket;
