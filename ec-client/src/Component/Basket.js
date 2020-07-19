import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";

function Basket({ basketItems }) {
  const [num, setNum] = useState();



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
      (
      <div className="products">
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
                  {/* <ButtonGroup aria-label="quantityofproduct">
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
                  {/* <Button
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
                  // </Button> */} 
                                  </li>
              </ul>
            </div>
          );
        })}
      </div>
      );
    </div>
  );
}

export default Basket;
