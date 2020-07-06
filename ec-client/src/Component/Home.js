import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import ProjectLogo from "../Img/logo.svg";

function Home({ userData, userstatus }) {
  return (
    <div>
      <div className="homestyle">
        <h3>
          <hr />
          <ul className="homebarstyle">
            <li>
              <button>xzcz</button>
            </li>
            <li>
              <button>xzcz</button>
            </li>
            <li>
              <button>xzcz</button>
            </li>
          </ul>
          <hr />
        </h3>
      </div>
      {`The user is looged in ${userstatus}and the email is ${userData}`}
    </div>
  );
}

export default Home;
