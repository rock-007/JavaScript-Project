import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, MenuItem, Container } from "react-bootstrap";

function Basket({ basketItems, updatedBasket }) {
  const [num, setNum] = useState();
  console.log(basketItems);

  const increase = (eachproduct) => {
    if (eachproduct.stockQuantity > eachproduct.quantity + 1) {
      let newProductQty = eachproduct;
      newProductQty.quantity = +eachproduct.quantity + 1;
      console.log(newProductQty);
      updatedBasket(newProductQty);
    }

    //else we can throw error that not enough porducts in stock
  };
  // console.log(quantities);

  const decrease = (eachproduct) => {
    //   setQuantites({ ...quantities, [productName]: Math.max(0, quantities[productName] - 1) });
  };

  return (
    <div>
      {/* <h1>{num}</h1>
      <select
        onChange={(event) => {
          setNum(event.target.value);
        }}
      >
        <option value="">Select number</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">{`  ${items}`}</option>

        
      </select> */}

      <div className="BasketProducts">
        {basketItems.map((eachproduct) => {
          let productName = eachproduct.product_name;
          let producNumber = eachproduct.producNumber;
          let price = eachproduct.price;
          let desc = eachproduct.productDescription;
          let photo = eachproduct.image_URL;
          let stockQuantity = eachproduct.stockQuantity;
          return (
            <div className="BasketEachProduct" key={producNumber}>
              <ul>
                <li>
                  <img className="BasketProducts-image" src={photo} />
                </li>
                <li>{productName} </li>
                <li>
                  Item No:{producNumber}(InStock:{stockQuantity})
                </li>
                <li>
                  <li>
                    <p>unit price: {price}£ </p>
                  </li>

                  <li>
                    <p>unit price: {price}£ </p>
                  </li>
                </li>
                {/* <li>{desc}</li> */}
                <li>
                  <ButtonGroup aria-label="quantityofproduct">
                    <Button name={productName} variant="secondary">
                      {eachproduct.quantity}
                    </Button>
                    <Button variant="secondary" name="subtract" value="subtract" onClick={() => decrease(eachproduct)}>
                      -
                    </Button>

                    <Button variant="secondary" name="add" value="add" onClick={() => increase(eachproduct)}>
                      +
                    </Button>
                  </ButtonGroup>
                  &nbsp;
                  <Button
                    name={producNumber}
                    variant="primary"
                    // onClick={() => {
                    //   addBasketitems(eachproduct, quantities[productName]);
                    //   clearselection(productName);
                    //   alert(`${productName}, with quantitiy${quantities[productName]} is added to the basket`);
                    // }}
                  >
                    BuyNOW
                  </Button>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Basket;
