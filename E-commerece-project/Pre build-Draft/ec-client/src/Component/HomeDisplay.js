import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import ProjectLogo from "../Img/logo.svg";

// import Button from 'react-bootstrap/Button'; this will only  bring the button module and not whole library if bootstrap

import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, MenuItem, Container } from "react-bootstrap";

// props here are arrays of object
function Home({ props, addBasketitems }) {
  let initialQuantities = props.reduce((quantities, product) => ({ ...quantities, [product.product_name]: 0 }), {});
  console.log("13hhj", props);
  console.log("dfsds", initialQuantities);

  console.log("homedisp", props);

  useEffect(() => {
    const newQuantities = props.reduce((quantities, product) => ({ ...quantities, [product.product_name]: 0 }), {});
    setQuantites(newQuantities);
  }, [props]);

  const [quantities, setQuantites] = useState(initialQuantities);
  console.log("2344", quantities);
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
              <li style={{ fontWeight: "900", fontSize: "20px", height: "8rem" }}>{productName} </li>
              <li>
                Item No:&nbsp; &nbsp;{producNumber}&nbsp;(InStock:&nbsp;{stockQuantity})
              </li>
              <li>price:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price}£ </li>
              <li className="description-height">{desc}</li>
              <li>
                <ButtonGroup aria-label="quantityofproduct" key={productName}>
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
