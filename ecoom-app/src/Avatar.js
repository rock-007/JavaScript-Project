import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Avatar.css";
import "tachyons";
import Avatarlist from "./Avatarlist";

class Avatar extends Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to Avatar World",
    };
  }
  namechange() {
    this.setState({
      name: "Thanks for Subscribing",
    });
  }

  render() {
    const Avatarlistarray = [
      {
        id: 1,
        name: "umair",
      },
      {
        id: 1,
        name: "uzair",
      },
      {
        id: 1,
        name: "owais",
      },
      {
        id: 1,
        name: "ashraf",
      },
    ];
    //Map(callback(currentvalue,index,array) arg) map provides new array from an existing array

    const arrayavatarcard = Avatarlistarray.map((avatarcard, index) => {
      return (
        <Avatarlist key={index} id="1" name={Avatarlistarray[index].name} />
      );
    });
    return (
      <div className="mainpage">
        <h1>{this.state.name}</h1>
        {arrayavatarcard}
        <button onClick={() => this.namechange()}>Subscribe</button>
      </div>
    );
  }
}

export default Avatar;

// the first blue {} are for destructiuring on line 11
