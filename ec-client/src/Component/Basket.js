import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, MenuItem, Container } from "react-bootstrap";
import { makeStyle, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from "@material-ui/core";

function Basket({ basketItems, updatedBasket, resetBasket }) {
  let [totalPrice, setTotalPrice] = useState(0);

  console.log(basketItems);
  const increaseQuantity = (eachproduct) => {
    if (eachproduct.stockQuantity > eachproduct.quantity + 1) {
      // TODO for when this is not true return not enough item in stock
      let newProductQty = eachproduct;
      newProductQty.quantity = +eachproduct.quantity + 1;
      console.log(newProductQty);
      updatedBasket(newProductQty);
    }
    //else we can throw error that not enough porducts in stock
  };
  const decreseQuantity = (eachproduct) => {
    if (eachproduct.stockQuantity > eachproduct.quantity + 1) {
      // TODO for when this is not true return not enough item in stock
      let newProductQty = eachproduct;
      newProductQty.quantity = +eachproduct.quantity - 1;
      console.log(newProductQty);
      updatedBasket(newProductQty);
    }
    //else we can throw error that not enough porducts in stock
  };

  const buyNow = (basketItems) => {
    //else we can throw error that not enough porducts in stock
    console.log();

    resetBasket(basketItems);
    window.location.href = "http://localhost:3000/signin";
  };

  useEffect(() => {
    if (basketItems) {
      let total = 0;
      for (let i = 0; i < basketItems.length; i++) {
        let eachItemTotalPrice = basketItems[i].price * basketItems[i].quantity;
        total = eachItemTotalPrice + total;
      }
      console.log(total);

      setTotalPrice(total);
    }
  });

  console.log(totalPrice);

  return (
    <>
      <div className="BasketProducts" style={{ float: "left" }}>
        <TableContainer className="Basketitems" component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell>Product Name </TableCell>
                <TableCell> Item No./Stock Level</TableCell>
                <TableCell> Quantitiy</TableCell>
                <TableCell> Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basketItems.map((eachproduct) => {
                let productName = eachproduct.product_name;
                let producNumber = eachproduct.producNumber;
                let price = eachproduct.price;
                let desc = eachproduct.productDescription;
                let photo = eachproduct.image_URL;
                let stockQuantity = eachproduct.stockQuantity;
                let boughtQuantitiy = eachproduct.quantity;
                return (
                  <TableRow key={producNumber}>
                    <TableCell>
                      <img className="BasketProducts-image" src={photo} />
                    </TableCell>
                    <TableCell>{productName}</TableCell>
                    <TableCell>
                      Item No:{producNumber} (InStock:{stockQuantity})
                    </TableCell>
                    <TableCell>
                      <ul style={{ float: "bottom", display: "flex", flexDirection: "column" }}>
                        <li style={{ maxWidth: "10rem" }}>
                          <span>{boughtQuantitiy} </span>
                        </li>
                        <li style={{ maxWidth: "10rem" }}>
                          <ButtonGroup aria-label="quantityofproduct">
                            <Button variant="secondary" name="subtract" value="subtract" onClick={() => decreseQuantity(eachproduct)}>
                              -
                            </Button>
                            <Button name={productName} variant="secondary">
                              {eachproduct.quantity}
                            </Button>
                            <Button variant="secondary" name="add" value="add" onClick={() => increaseQuantity(eachproduct)}>
                              +
                            </Button>
                          </ButtonGroup>
                        </li>
                      </ul>
                    </TableCell>
                    <TableCell>£{boughtQuantitiy * price}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ float: "right", paddingRight: "5rem" }}>
        <TableContainer
          className="basket-summary"
          component={Paper}
          style={{ float: "right", top: "0", display: "flex", flexDirection: "column", maxHeight: "9vw", maxWidth: "14vw" }}
        >
          <Table className="basket-summary-inside">
            <TableHead>
              <TableRow>
                <TableCell>Summary </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <tr>
                <td>SubTotal:{totalPrice}</td>
              </tr>

              <tr>
                <td></td>
              </tr>
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonGroup aria-label="quantityofproduct">
          <Button variant="secondary" name="subtract" value="subtract" onClick={() => buyNow(basketItems)}>
            Buy Now
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default Basket;

// {
//   basketItems.map((eachproduct) => {
//     let productName = eachproduct.product_name;
//     let producNumber = eachproduct.producNumber;
//     let price = eachproduct.price;
//     let desc = eachproduct.productDescription;
//     let photo = eachproduct.image_URL;
//     let stockQuantity = eachproduct.stockQuantity;
//     return (
//       <div className="" key={producNumber}>
//         <ul>
//           <li>
//             <img className="BasketProducts-image" src={photo} />
//           </li>
//           <li>{productName} </li>
//           <li>
//             Item No:{producNumber}(InStock:{stockQuantity})
//           </li>
//           <li>price:{price}£ </li>

//           <li>
//  <ButtonGroup aria-label="quantityofproduct">
// {/* //   <Button variant="secondary" name="subtract" value="subtract" onClick={() => decreseQuantity(eachproduct)}>
// //     -
// //   </Button> */}
// //   <Button name={productName} variant="secondary">
// //     {eachproduct.quantity}
// //   </Button>
// //   <Button variant="secondary" name="add" value="add" onClick={() => increaseQuantity(eachproduct)}>
// //     +
// //   </Button>
// // </ButtonGroup>
//             &nbsp;
//             {/* will get the value and object passed as on click for all the info of the selectede item */}
//             {/* <Button
//             name={producNumber}
//             variant="primary"
//             // onClick={() => {
//             //   addBasketitems(eachproduct, quantities[productName]);
//             //   alert(`The item:${productName}, with added quantitiy:${quantities[productName]} is added to the basket`);
//             //   resetcounter(productName);
//             // }}
//           >
//             Add to Basket
//           </Button> */}
//           </li>
//         </ul>
//       </div>
//     );
//   });
// }
