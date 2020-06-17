import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Shop" component={Shop} />

        </switch>
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
