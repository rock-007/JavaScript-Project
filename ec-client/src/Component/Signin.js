import React from "react";
import "../App.css";
import SigninOptions from "./SigninOptions";
import Useraccount from "./Useraccount";

import cookie from "react-cookies";

function Signin() {
  const usecookies = cookie();

  console.log(usecookies);

  function is_logged_in() {
    let cookies_state = usecookies !== undefined && usecookies !== null;
    return cookies_state;
  }

  return is_logged_in() ? <SigninOptions /> : <Useraccount />;
}
export default Signin;
