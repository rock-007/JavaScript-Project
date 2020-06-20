import React from "react";
import "../App.css";

function Sidebar() {
  return (
    <div>
      <input type="checkbox" id="check"></input>
      <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>

      <div className="sidebardiv">
        <header> Menu</header>
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
    </div>
  );
}

export default Sidebar;
