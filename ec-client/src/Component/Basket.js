import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Button, ButtonGroup, ToggleButtonGroup, ToggleButton, Dropdown, MenuItem, Container } from "react-bootstrap";
import { makeStyle, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from "@material-ui/core";

function Basket({ basketItems, updatedBasket }) {
  const [num, setNum] = useState();

  console.log(basketItems);
  // let x = [...basketItems];
  // console.log(x);

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

  return (
    <div className="BasketProducts">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> </TableCell>
              <TableCell>Product Name </TableCell>
              <TableCell> Item No.</TableCell>
              <TableCell> StockLevel</TableCell>
              <TableCell> Quantitiy</TableCell>
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

              <TableRow key={producNumber}>
                <TableCell>
                  {" "}
                  <img className="BasketProducts-image" src={photo} />{" "}
                </TableCell>
                <TableCell>{productName}</TableCell>
                <TableCell>{productName}</TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
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
//             <ButtonGroup aria-label="quantityofproduct">
//               <Button variant="secondary" name="subtract" value="subtract" onClick={() => decreseQuantity(eachproduct)}>
//                 -
//               </Button>
//               <Button name={productName} variant="secondary">
//                 {eachproduct.quantity}
//               </Button>
//               <Button variant="secondary" name="add" value="add" onClick={() => increaseQuantity(eachproduct)}>
//                 +
//               </Button>
//             </ButtonGroup>
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
