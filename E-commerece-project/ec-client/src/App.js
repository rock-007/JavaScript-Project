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
// import history from './history';
import history from "./History";
// import { useHistory } from "react-router-dom";

import Footer from "./Component/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const userAccountData = () => {
  // user info can be loaded after refresh
  return window.localStorage.getItem("user-data");
};
const isLoggedIn = () => {
  // user info can be loaded after refresh
  return !!window.localStorage.getItem("user-status"); // !! : cast to boolean
};

let initialvalue = () => {
  // (prevItems, basketItems) => {
  //   return [1];
  // };

  let y1 = JSON.parse(window.localStorage.getItem("user-basket") || "[]");
  console.log(y1);
  return y1;
};

let finalbuyitems = () => {
  console.log(window.localStorage.getItem("user-final"));
  let z1 = JSON.parse(window.localStorage.getItem("user-final") || "[]");
  console.log(z1);

  return z1;
};
let buyNowTrue = () => {
  console.log(window.localStorage.getItem("buyNowTrue"));
  let z1 = !!JSON.parse(window.localStorage.getItem("buyNowFinal") || "0");
  console.log(z1);

  return z1;
};
console.log(finalbuyitems);

// [...prevItems, { ...product, quantity }]

// const initailDropdownOpen = () => {
//   return window.localStorage.getItem("user-DropdownOpen") || false;
// };

function App() {
  // const [isDropdownOpen, setDropdownOpen] = useState(initailDropdownOpen);

  const [siginalready, setifsignedin] = useState(isLoggedIn());
  const [userData, setUserData] = useState(userAccountData());
  const [basketItems, setBasketItems] = useState(initialvalue()); // this will come from two level down child the items customers put ]initialvalue() in basket
  console.log(finalbuyitems);

  const [finalBuy, setfinalBuy] = useState(finalbuyitems());
  const [buyNow, setbuyNow] = useState(buyNowTrue());
  console.log("finalbuyitems", finalbuyitems);
  console.log("userDataxxc", userData);

  // const setDropdownOpenWrapper = () => {
  //   console.log("dfd", window.localStorage.getItem("user-DropdownOpen"));
  //   console.log("dfdx", isDropdownOpen);

  //   //

  //   setDropdownOpen((prevState) => !prevState);
  //   localStorage.setItem("user-DropdownOpen", !isDropdownOpen);
  // };
  const resetBuynow = (latestState) => {
    console.log("66", latestState);

    setbuyNow(latestState);
    window.localStorage.setItem("buyNowFinal", JSON.stringify(latestState));
  };

  const resetBasket = (basketItems) => {
    console.log(basketItems);
    //setfinalBuy will set to some value and if (finalBuy != null && buyNow === true) is true then it will call the API call
    setfinalBuy(basketItems);
    console.log(finalBuy);
    window.localStorage.setItem("user-final", JSON.stringify(basketItems));

    setBasketItems([]);
    window.localStorage.setItem("user-basket", JSON.stringify([]));
    setbuyNow(true);
    window.localStorage.setItem("buyNowFinal", JSON.stringify(true));
  };
  console.log("fgfg", userData);

  const updatedBasket = (newProductQty) => {
    console.log(newProductQty);
    setBasketItems((prevItems) => {
      let updatedQuantityArray = [];
      for (let z = 0; z < basketItems.length; z++) {
        console.log(basketItems[z].producNumber);
        console.log(newProductQty.producNumber);
        if (newProductQty.producNumber !== basketItems[z].producNumber) {
          console.log(newProductQty.producNumber);
          console.log(basketItems[z].producNumber);
          updatedQuantityArray.push(basketItems[z]);
        } else {
          if (newProductQty.quantity == 0) {
          } else {
            // updatedQuantityArray.unshift(basketItems[i]);
            updatedQuantityArray.push(newProductQty);
          }
        }
      }
      window.localStorage.setItem("user-basket", JSON.stringify(updatedQuantityArray));
      return updatedQuantityArray;
    });
  };

  // product here is object and quantity is number and both coming from child componenet
  const addBasketitems = (product, quantity) => {
    setBasketItems((prevItems) => {
      console.log("prevItems", prevItems);
      console.log("product", product);
      console.log("quantity", quantity);

      // let dummy = [  {
      //     image_URL: "xx",
      //     price: "00.00",
      //     producNumber: "1",
      //     productDescription: "0000",
      //     stockQuantity: "00",
      //     quantity: "00",
      //   },
      // ];

      //       console.log(prevItems);
      //       if (prevItems === null) {
      //         console.log(prevItems);
      //          window.localStorage.setItem("user-basket", JSON.stringify({ ...product, quantity }));
      // let r1 = JSON.parse(window.localStorage.getItem("user-basket"));
      //         console.log(r1);
      //         return r1;
      //       } else if (prevItems != null)
      let newItemsArray = [];
      let changeHappen = 0;
      console.log(typeof prevItems);
      console.log(prevItems);

      if (basketItems.length < 1) {
        const newItems = [...prevItems, { ...product, quantity }];
        console.log(newItems);
        window.localStorage.setItem("user-basket", JSON.stringify(newItems));
        console.log(prevItems);
        return newItems;
      } else {
        console.log(basketItems);
        console.log(basketItems.length);
        // console.log(basketItems[0].product_name);
        const compareItem = [{ ...product, quantity }];
        for (let i = 0; i < basketItems.length; i++) {
          console.log(compareItem);
          console.log(basketItems[i].producNumber);

          if (compareItem[0].producNumber !== basketItems[i].producNumber) {
            console.log(compareItem[0].producNumber);
            console.log(basketItems[i].producNumber);
            newItemsArray.push(basketItems[i]);
            console.log(basketItems[i]);
            console.log(newItemsArray);
          } else {
            newItemsArray.unshift(basketItems[i]);
            newItemsArray[0].quantity = +basketItems[i].quantity + quantity;
            changeHappen = 1;
          }
        }
        if (changeHappen == 0) {
          console.log(newItemsArray);
          newItemsArray = [...newItemsArray, { ...product, quantity }];
          console.log(newItemsArray);
        }
        // else {
        //   console.log(newItemsArray);
        //   newItemsArray.push(compareItem);
        // }

        console.log(newItemsArray);
        window.localStorage.setItem("user-basket", JSON.stringify(newItemsArray));
        return newItemsArray;

        // const newItems = [...prevItems, { ...product, quantity }];
        // console.log(newItems);
        // // window.localStorage.setItem("user-basket", JSON.stringify(newItems));
        // console.log(prevItems);
        // return newItems;
      }

      //// setBasketItems((prevItems) => [...prevItems, { ...product, quantity }]);
      //  console.log("ff", prevItems);
      // console.log(typeof newItems);
      // console.log("newItems", newItems);
      //  return newItems;
    });
    // console.log(typeof quantity);

    // window.localStorage.setItem(
    //   "user-basket",
    //   JSON.stringify([...prevItems, { ...product, quantity }])
    // );

    console.log(typeof product);
    console.log("product", product);
    // console.log(typeof quantity);
    console.log("quantity", quantity);

    // console.log(typeof (product))
    // console.log(product)

    //  console.log(product.currentTarget.value) // value here is string so convert to an array
  };
  // window.localStorage.setItem('user-basket', basketItems)
  console.log(typeof basketItems);
  console.log(basketItems);

  // let url = "https://t5a40d1b2d.execute-api.eu-west-2.amazonaws.com/Dev";
  let url = "https:/yogaoutlet.herokuapp.com/api/verifyifloginalready";

  let options = {
    credentials: "include",
    method: "POST",
  };

  let verifyifloginalready = new Request(url, options);

  useEffect(() => {
    credentailverify();
  }, []);

  const userDataRefresh = () => {
    credentailverify();
  };

  function credentailverify() {
    (async () => {
      const x1 = await fetch(verifyifloginalready)
        .then((res) => {
          console.log("253xx", res.status);
          if (res.status == 400 || res.status == 401) {
            // to do call delete current  cookies function
            window.localStorage.removeItem("user-data");

            return setifsignedin(false);
          } else if (siginalready == false) {
            setifsignedin(true);
            window.localStorage.setItem("user-status", true);
            console.log("253xyx", res.json());
            return res.json();
          } else {
            // console.log("263xyx", res.json()); if you do res.json() twice or more you will get error
            return res.json();
          }
        })
        .then((data) => {
          console.log("253xx1", data);

          console.log("253xx1", data[0]);

          console.log("253xx1", data[0]);
          let arrayData = [...data];
          setUserData(() => arrayData);
          // window.localStorage.setItem("user-status", true);
          // console.log(data.data);
          window.localStorage.setItem("user-data", JSON.stringify(arrayData)); // if i dont JSON.stringify then it will appear as [object object]
        })
        .catch((err) => console.log("ddf", err));
      console.log(userData);
      console.log(siginalready);

      return x1;
    })();
  }

  return (
    // Router,Route,  swtch... that will help us in change pages
    <Router history={history}>
      <div className="App">
        <header className="header">
          <Nav userinfo={userData} userstatus={siginalready} />
        </header>

        <div className="main">
          {/* <Sidebar /> */}
          <Switch>
            {/* // not sure if we need to pass states for h */}
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} userData={userData} userstatus={siginalready} addBasketitems={addBasketitems} userDataRefresh={userDataRefresh} />}
              //  why we pass all pros {...props} here
            />
            // render here work for passing the ste into the child component // from router {/* render={props=>(<newComponent}/> )} */}
            <Route
              path="/basket"
              exact
              render={(props) => (
                <Basket {...props} userData={userData} userstatus={siginalready} basketItems={basketItems} updatedBasket={updatedBasket} resetBasket={resetBasket} />
              )}
            />
            <Route
              path="/signin"
              exact
              render={(props) => <Signin {...props} buyNow={buyNow} resetBuynow={resetBuynow} userData={userData} finalBuy={finalBuy} userstatus={siginalready} />}
            />
            <Route path="/accessories" exact render={(props) => <Accessories {...props} userData={userData} />} />
            {/* <Route path="/phones" exact render={(props) => <Phones {...props} userData={userData} userstatus={siginalready} />} /> */}
          </Switch>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

// const Home = () => (
//   <div>
//     <h1> Home page</h1>
//   </div>
// );

export default App;
