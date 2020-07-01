import React, { useState, useEffect } from "react";
import "../App.css";

function Useraccount({ userinfo }) {
 // if (!userInfo) return <div />
  // return <div>`${credentailverify}`</div>;
  return <div>{`The user email address is ${userinfo}`}</div>;
}

export default Useraccount;
