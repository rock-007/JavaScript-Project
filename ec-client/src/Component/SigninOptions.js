import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Formlogin from "./Formlogin";
import Formregister from "./Formregister";

function SigninOptions() {
  // empty string as default initial parameter ('')

  const [login, setlogin] = useState(true);
  const [register, setregister] = useState(false);

  function loginclicked() {
    setlogin(true);
    setregister(false);
  }
  function registerclicked() {
    setlogin(false);
    setregister(true);
  }

  return (
    <div>
      <div className="root-container">
        <div className="box-controller">
          <div classname="box-container" onClick={loginclicked}>
            <em> Login..... </em>
          </div>
          <div classname="box-container" onClick={registerclicked}>
            <em>Register </em>
          </div>
        </div>

        <div className="box-controller">
          <div>
            {/* //it will be either  {login && <Formlogin />} or {register && <Formregister />} */}
            {login && <Formlogin />} {register && <Formregister />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninOptions;
