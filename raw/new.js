// #rfcp short for function componnet

import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Sidebar from "./Component/Sidebar";
import Basket from "./Component/Basket";
// import Phones from "./Component/Phones";
import Accessories from "./Component/Accessories";
import Signin from "./Component/Signin";
import Error from "./Error";
import Home from "./Component/Home";

import Footer from "./Component/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const userAccountData = () => {
  return window.localStorage.getItem("user-data");
};
const isLoggedIn = () => {
  return !!window.localStorage.getItem("user-status"); // !! : cast to boolean
};

let initialvalue = () => {
  let y1 = JSON.parse(window.localStorage.getItem("user-basket") || "[]");
  console.log(y1);
  return y1;
};
// after i add finalbuyitems here i start getting the error
let finalbuyitems = () => {
  let z1 = JSON.parse(window.localStorage.getItem("user-final") || "[]");
  console.log(z1);
  return z1;
};

function App() {
                 const [siginalready, setifsignedin] = useState(isLoggedIn());
                 const [userData, setUserData] = useState(userAccountData());
                 const [basketItems, setBasketItems] = useState(initialvalue());
                 const [finalBuy, setfinalBuy] = useState(finalbuyitems());
                 // also i add resetBasket and set the setfinalBuy as well
                 const resetBasket = (basketItems) => {
                   setfinalBuy([...basketItems]);
                   window.localStorage.setItem("user-final", [...basketItems]);
                   setBasketItems([]);
                   window.localStorage.setItem("user-basket", []);
                 };

                 const updatedBasket = (newProductQty) => {
                   setBasketItems((prevItems) => {
                     let updatedQuantityArray = [];
                     for (let z = 0; z < basketItems.length; z++) {
                       if (newProductQty.producNumber !== basketItems[z].producNumber) {
                         updatedQuantityArray.push(basketItems[z]);
                       } else {
                         if (newProductQty.quantity == 0) {
                         } else {
                           updatedQuantityArray.push(newProductQty);
                         }
                       }
                     }
                     window.localStorage.setItem("user-basket", JSON.stringify(updatedQuantityArray));
                     return updatedQuantityArray;
                   });
                 };

                 const addBasketitems = (product, quantity) => {
                   setBasketItems((prevItems) => {
                     let newItemsArray = [];
                     let changeHappen = 0;

                     if (basketItems.length < 1) {
                       const newItems = [...prevItems, { ...product, quantity }];

                       window.localStorage.setItem("user-basket", JSON.stringify(newItems));

                       return newItems;
                     } else {
                       const compareItem = [{ ...product, quantity }];
                       for (let i = 0; i < basketItems.length; i++) {
                         if (compareItem[0].producNumber !== basketItems[i].producNumber) {
                           newItemsArray.push(basketItems[i]);
                         } else {
                           newItemsArray.unshift(basketItems[i]);
                           newItemsArray[0].quantity = +basketItems[i].quantity + quantity;
                           changeHappen = 1;
                         }
                       }
                       if (changeHappen == 0) {
                         newItemsArray = [...newItemsArray, { ...product, quantity }];
                       }

                       console.log(newItemsArray);
                       window.localStorage.setItem("user-basket", JSON.stringify(newItemsArray));
                       return newItemsArray;
                     }
                   });

                   console.log(typeof product);
                   console.log("product", product);
                   // console.log(typeof quantity);
                   console.log("quantity", quantity);
                 };

                 console.log(typeof basketItems);
                 console.log(basketItems);

                 let url = "http://localhost:5000/api/verifyifloginalready";

                 let options = {
                   credentials: "include",
                   method: "POST",
                 };

                 let verifyifloginalready = new Request(url, options);
                 useEffect(() => {
                   credentailverify();
                 }, []);

                 function credentailverify() {
                   (async () => {
                     const x1 = await fetch(verifyifloginalready)
                       .then((res) => {
                         if (res.status == 400 || res.status == 401) {
                           console.log(res.status);
                           window.localStorage.removeItem("user-data");

                           return setifsignedin(false);
                         } else if (siginalready == false) {
                           setifsignedin(true);

                           return res.json();
                         } else {
                           return;
                         }
                       })
                       .then((data) => {
                         setUserData(data.data);
                         window.localStorage.setItem("user-status", true);
                         window.localStorage.setItem("user-data", data.data);
                       })
                       .catch((err) => console.log("err"));
                     console.log(userData);
                     console.log(siginalready);

                     return x1;
                   })();
                 }

                 return (
                   <Router>
                     <div className="App">
                       <header className="header">
                         <Nav userinfo={userData} userstatus={siginalready} />
                       </header>

                       <div className="main">
                         <Switch>
                           <Route path="/" exact render={(props) => <Home {...props} userData={userData} userstatus={siginalready} addBasketitems={addBasketitems} />} />

                           <Route
                             path="/basket"
                             exact
                             render={(props) => (
                               <Basket {...props} userData={userData} userstatus={siginalready} basketItems={basketItems} updatedBasket={updatedBasket} resetBasket={resetBasket} />
                             )}
                           />
                           <Route path="/signin" exact render={(props) => <Signin {...props} userData={userData} finalBuy={finalBuy} userstatus={siginalready} />} />
                           <Route path="/accessories" exact render={(props) => <Accessories {...props} userData={userData} userstatus={siginalready} />} />
                         </Switch>
                       </div>

                       <div className="footer">
                         <Footer />
                       </div>
                     </div>
                   </Router>
                 );
               }

export default App;
