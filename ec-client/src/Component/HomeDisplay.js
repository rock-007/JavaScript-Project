import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import ProjectLogo from "../Img/logo.svg";
// import Button from 'react-bootstrap/Button'; this will only  bring the button module and not whole library if bootstrap

import { Button, ButtonGroup, Dropdown, MenuItem, Container } from "react-bootstrap";

function Home({ props }) {
  //   const [yogaMatState, setYogaMatState] = useState("---Select Yogamats---");
  //   const [yogaEquipState, setYogaEquipState] = useState("---Select Equipments---");

  //   const [yogaClothsState, setYogaClothsState] = useState("---Select Cloths---");
  //   const [accessoriesState, setAccessoriesState] = useState("---Select Accessories---");

  //   function reset() {
  //     setYogaMatState("---Select Yogamats---");
  //     setAccessoriesState("---Select Accessories---");
  //     setYogaClothsState("---Select Cloths---");
  //     setYogaEquipState("---Select Equipments---");

  return (
    //    <React.Fragment> its a wrapper and then we dont need to wrap around divs...
    <>
      <div>{`${props}`}</div>
    </>
  );
}

export default Home;
