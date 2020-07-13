import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import ProjectLogo from "../Img/logo.svg";

// import Button from 'react-bootstrap/Button'; this will only  bring the button module and not whole library if bootstrap

import {
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
  Dropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
// props here are arrays of object
function Home({ props }) {
  const [quantitiyselected, setQuantity] = useState(0);
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

  // console.log("26", e);
  //   console.log("26", e.currentTarget);
  //   console.log("26", e.currentTarget.textContent);
  //   console.log("26", e.currentTarget.value);
  //   console.log("26", e.currentTarget.key);

  let selectquantity = (e) => {
    if (e.currentTarget.name == "add") {
      let i = quantitiyselected + 1;
      setQuantity(i);
    } else if (e.currentTarget.name == "subtract" && quantitiyselected > 0) {
      let z = quantitiyselected - 1;
      setQuantity(z);
    } else;
  };

  return (
    <div className="products">
      {props.map((eachproduct, index) => {
        let productName = eachproduct.product_name;
        let producNumber = eachproduct.producNumber;
        let price = eachproduct.price;
        let desc = eachproduct.productDescription;
        let photo = eachproduct.image_URL;
        let stockQuantity = eachproduct.stockQuantity;
        return (
          <div className="products" key={producNumber}>
            <ul >
              <li>
                <img className="products-image" src={photo} />
              </li>
              <li>{productName} </li>
              <li>
                Item No:{producNumber}(InStock:{stockQuantity})
              </li>
              <li>price:{price}£ </li>
              <li>{desc}</li>
              <li>
                <ButtonGroup aria-label="quantityofproduct">
                  <Button
                    key={index}
                    variant="secondary"
                    name="subtract"
                    value="subtract"
                    onClick={selectquantity}
                  >
                    -
                  </Button>
                  <Button  variant="secondary">
                    {quantitiyselected}
                  </Button>
                  <Button
                    
                    variant="secondary"
                    name="add"
                    value="add"
                    onClick={selectquantity}
                  >
                    +
                  </Button>
                </ButtonGroup>
                &nbsp;
                <Button  variant="primary">
                  Buy
                </Button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
