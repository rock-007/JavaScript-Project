// useState hold info that we get from an api and use Effect runs that fatch call when our component mount
import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItem = async () => {
    const data1 = await fetch(
      "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats"
    );
    const items = await data1.json();
    const y = items.data;
    console.log(data1);
    console.log(items);
    console.log(items.data);
    setItems(items.data);
  };
  return (
    <div>
      {" "}
      {items.then((value) => (
        <p>{value.data}</p>
      ))}
    </div>
  );
}

export default Shop;
