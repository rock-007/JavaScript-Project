import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Demo.css";

const Demo = (props) => {
  return (
    <div className="maindiv">
      <h1>Hello World {props.name}</h1>
    </div>
  );
};

// class Demo extends Component {
//   render() {
//     return (
//       <div className="maindiv">
//         <h1>Hello World {this.props.name}</h1>
//       </div>
//     );
//   }
// }

export default Demo;
