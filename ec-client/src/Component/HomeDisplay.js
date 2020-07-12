import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import ProjectLogo from "../Img/logo.svg";
// import Button from 'react-bootstrap/Button'; this will only  bring the button module and not whole library if bootstrap

import { Button, ButtonGroup, Dropdown, MenuItem, Container } from "react-bootstrap";
// props here are arrays of object
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
  console.log("homedisp", props);
  return (
    //    <React.Fragment> its a wrapper and then we dont need to wrap around divs...
    <div className="products">
      {props.map((eachproduct, index) => {
        let name = eachproduct.main_Products_category_productId;
        let key = eachproduct.producNumber;
        let price = eachproduct.price;
        let desc = eachproduct.productDescription;
        let photo = eachproduct.image_URL;
        return (
          <div key={index}>
            <ul>
              <li>
                {/* we will use .product-img to set the css for image */}
                <img className="products-image" src={photo}/>
              </li>
              <li>{name} </li>
              <li>{key} </li>
              <li>{price} </li>
              <li>{desc}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
