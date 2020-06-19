import React from "react";
import "../App.css";

function Sidebar() {
  return (
    <div className="sidebardiv">
      <header> Options</header>
      <ul className="sidebarul">
        <li>
          <a href="#">
            <i className="fas fa-mobile-alt"></i>
              Phones
          </a>
        </li>
        <li>
          {" "}
          <a href="#">
            <i className="fas fa-stream"></i>
             Accessories
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">
            <i className="fas fa-question-circle"></i>
             About
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="#">
            <i className="fas fa-envelope"></i>
             Contact
          </a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
