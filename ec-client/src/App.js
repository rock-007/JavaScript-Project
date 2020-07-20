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
  // user info can be loaded after refresh
  return window.localStorage.getItem("user-data"); // !! : cast to boolean
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

// [...prevItems, { ...product, quantity }]
function App() {
  const [siginalready, setifsignedin] = useState(isLoggedIn());
  const [userData, setUserData] = useState(userAccountData());
  const [basketItems, setBasketItems] = useState(initialvalue()); // this will come from two level down child the items customers put ]initialvalue() in basket

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
            // to do call delete current  cookies function
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
    // Router,Route,  swtch... that will help us in change pages
    <Router>
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
              render={(props) => <Home {...props} userData={userData} userstatus={siginalready} addBasketitems={addBasketitems} />}
              //  why we pass all pros {...props} here
            />
            // render here work for passing the ste into the child component // from router {/* render={props=>(<newComponent}/> )} */}
            <Route
              path="/basket"
              exact
              render={(props) => <Basket {...props} userData={userData} userstatus={siginalready} basketItems={basketItems} updatedBasket={updatedBasket} />}
            />
            <Route path="/signin" exact render={(props) => <Signin {...props} userData={userData} userstatus={siginalready} />} />
            <Route path="/accessories" exact render={(props) => <Accessories {...props} userData={userData} userstatus={siginalready} />} />
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
