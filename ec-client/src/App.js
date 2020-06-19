import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Sidebar from "./Component/Sidebar";
import About from "./Component/About";
import Shop from "./Component/Shop";
import Error from "./Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Sidebar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" exact component={About} />
          <Route path="/Shop" exact component={Shop} />
          <Route component={Error} />
        </Switch>
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
