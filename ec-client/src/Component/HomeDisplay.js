import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
import ProjectLogo from "../Img/logo.svg";

// import Button from 'react-bootstrap/Button'; this will only  bring the button module and not whole library if bootstrap

import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, MenuItem, Container } from "react-bootstrap";

// props here are arrays of object
function Home({ props, addBasketitems }) {
  const initialQuantities = props.reduce((quantities, product) => ({ ...quantities, [product.product_name]: 0 }), {});
  console.log(props);
  console.log(initialQuantities);

  // for (let i = 0; i < props.length; i++) {

  //   products[i] = { name:props[i].product_name }

  // }

  // const initialQuantitiy = props.reduce((quantities, product) => ({ ...quantities, [props.product_name]: 0 }, {})) // array of object return

  // const [quantitiyselected, setQuantity] = useState(initialQuantitiy);
  //quantitiyselected=[{object1},{props.product_name:..},{},...]

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

  // let selectquantity = (e) => {
  //   if (e.currentTarget.name == "add") {
  //     let i = quantitiyselected + 1;
  //     setQuantity(i);
  //   } else if (e.currentTarget.name == "subtract" && quantitiyselected > 0) {
  //     let z = quantitiyselected - 1;
  //     setQuantity(z);
  //   } else;
  // };

  const [quantities, setQuantites] = useState(initialQuantities);

  const clearselection = (productName) => {
    setQuantites({ ...quantities, [productName]: 0 });
  };

  const increase = (productName) => {
    console.log(initialQuantities);
    // below o/p
    //  { Yogamatters Eco Everyday Rise Yoga Mat: 0, Yogamatters Organic Cotton Yoga Mat: 0, CorkYogis Classic Cork Yoga Mat: 0, Jade Yoga Voyager Mat: 0 }
    setQuantites({ ...quantities, [productName]: quantities[productName] + 1 });
    console.log(quantities);
    // below o/p
  };
  console.log(quantities);

  const decrease = (productName) => {
    setQuantites({ ...quantities, [productName]: Math.max(0, quantities[productName] - 1) });
  };

  return (
    <div className="products">
      {props.map((eachproduct) => {
        let productName = eachproduct.product_name;
        let producNumber = eachproduct.producNumber;
        let price = eachproduct.price;
        let desc = eachproduct.productDescription;
        let photo = eachproduct.image_URL;
        let stockQuantity = eachproduct.stockQuantity;
        return (
          <div className="products" key={producNumber}>
            <ul>
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
                  <Button variant="secondary" name="subtract" value="subtract" onClick={() => decrease(productName)}>
                    -
                  </Button>
                  <Button name={productName} variant="secondary">
                    {quantities[productName]}
                  </Button>
                  <Button variant="secondary" name="add" value="add" onClick={() => increase(productName)}>
                    +
                  </Button>
                </ButtonGroup>
                &nbsp;
                {/* will get the value and object passed as on click for all the info of the selectede item */}
                <Button
                  name={producNumber}
                  value={quantities[productName]}
                  variant="primary"
                  onClick={() => {
                    addBasketitems(eachproduct, quantities[productName]);
                    clearselection(productName);
                    alert(`${productName}, with quantitiy${quantities[productName]} is added to the basket`);
                  }}
                >
                  Add to Basket
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
