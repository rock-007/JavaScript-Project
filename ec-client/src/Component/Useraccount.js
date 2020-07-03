import React, { useState, useEffect } from "react";
import "../App.css";

function Useraccount({ userinfo1, userinfo2 }) {
  // if (!userInfo) return <div />
  // return <div>`${credentailverify}`</div>;
  // in ES5  return <div>{"The user email address is" + userinfo1 +userinfo2}</div>;
  return <div>{`This account belongs to ${userinfo1} and is loggedin`}</div>;
}

export default Useraccount;
