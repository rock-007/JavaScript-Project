import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, MenuItem, Container } from "react-bootstrap";

function Basket({ basketItems, updatedBasket }) {
  const [num, setNum] = useState();

  console.log(basketItems);
  // let x = [...basketItems];
  // console.log(x);

  const increase = (eachproduct) => {
    if (eachproduct.stockQuantity > eachproduct.quantity + 1) {
      // TODO for when this is not true return not enough item in stock
      let newProductQty = eachproduct;
       newProductQty.quantity = +eachproduct.quantity + 1;
      console.log(newProductQty);
      updatedBasket(newProductQty);
    }

    //else we can throw error that not enough porducts in stock
  };

  return (
    <div className="finalproductsmain">
      {basketItems.map((eachproduct) => {
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
                  <Button variant="secondary" name="subtract" value="subtract">
                    -
                  </Button>
                  <Button name={productName} variant="secondary">
                    {eachproduct.quantity}
                  </Button>
                  <Button variant="secondary" name="add" value="add" onClick={() => increase(eachproduct)}>
                    +
                  </Button>
                </ButtonGroup>
                &nbsp;
                {/* will get the value and object passed as on click for all the info of the selectede item */}
                <Button
                  name={producNumber}
                  variant="primary"
                  // onClick={() => {
                  //   addBasketitems(eachproduct, quantities[productName]);
                  //   alert(`The item:${productName}, with added quantitiy:${quantities[productName]} is added to the basket`);
                  //   resetcounter(productName);
                  // }}
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

export default Basket;
