import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Sidebar from "./Component/Sidebar";
import Basket from "./Component/Basket";
import Phones from "./Component/Phones";
import Accessories from "./Component/Accessories";
import Signin from "./Component/Signin";
import Error from "./Error";
import Footer from "./Component/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [siginalready, setifsignedin] = useState(false);

  //initial userinfo is empty
  const [userinfonew, setUserinfo] = useState([]);

  useEffect(() => {
    credentailverify();
  }, []);

  let url = "http://localhost:5000/api/verifyifloginalready";

  let options = {
    credentials: "include",
    method: "POST",
  };

  let verifyifloginalready = new Request(url, options);

  let credentailverify = async () => {
    // x1 will take if true then it will extract the user email address
    const x1 = await fetch(verifyifloginalready)
      .then((res) => {
        if (res.status == 400 || res.status == 401) {
          //return console.log(res.status)
          return setifsignedin(false);
        } else {
          setifsignedin(true);

          return res.json();
        }
      })
      .then((data) => {
        console.log(data.data);
        setUserinfo(data.data);
        console.log(userinfonew);
      })
      .catch((err) => console.log("err"));
    console.log(x1);
    return x1;
  };

  console.log(userinfonew);

  return (
    <Router>
      <div className="App">
        <header>
          <Nav userinfo1={userinfonew} userinfo2={siginalready}/>
        </header>

        <div className="main">
          <Sidebar />
          <Switch>
            <Route
              path="/"
              exact
              // not sure if we need to pass states for home
              render={(props) => <Home {...props} userinfo1={userinfonew} />}
            />
            // render here work for passing the ste into the child component //
            from router {/* render={props=>(<newComponent}/> )} */}
            <Route
              path="/basket"
              exact
              render={(props) => (
                <Basket
                  {...props}
                  userinfo1={userinfonew}
                  userinfo2={siginalready}
                />
              )}
            />
            <Route
              path="/signin"
              exact
              render={(props) => (
                <Signin
                  {...props}
                  userinfo1={userinfonew}
                  userinfo2={siginalready}
                />
              )}
            />
            <Route
              path="/accessories"
              exact
              render={(props) => (
                <Accessories
                  {...props}
                  userinfo1={userinfonew}
                  userinfo2={siginalready}
                />
              )}
            />
            <Route
              path="/phones"
              exact
              render={(props) => (
                <Phones
                  {...props}
                  userinfo1={userinfonew}
                  userinfo2={siginalready}
                />
              )}
            />
          </Switch>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Home page</h1>
  </div>
);

export default App;
