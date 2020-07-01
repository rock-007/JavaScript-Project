import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Sidebar from "./Component/Sidebar";
import Basket from "./Component/Basket";
import Signin from "./Component/Signin";
import Error from "./Error";
import Footer from "./Component/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Nav />
        </header>

        <div className="main">
          <Sidebar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/basket" exact component={Basket} />
            <Route path="/signin" exact component={Signin} />
            <Route component={Error} />
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
