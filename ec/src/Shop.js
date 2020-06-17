// useState hold info that we get from an api and use Effect runs that fatch call when our component mount
import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

// whenver clicked shop then below function will be called
function Shop() {

  const [items, setItems] = useState([]);
// whenerever there is a change in the render method <app>  it will triggert uaseeffect method
  useEffect(() => {
    fetchItem();
  }, []);


  const fetchItem = async () => {
    const data1 = await fetch(
      "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats"
    );
    const items1 = await data1.json();

    console.log(data1);
    console.log(items1);
    console.log(items1.data);
    setItems(items1.data);
  };
  return (
    <div>
     {items.then((items) => (
        <p>{items.data}</p>
      ))}


    </div>
  );
}

export default Shop;
