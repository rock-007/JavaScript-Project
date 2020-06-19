// useState hold info that we get from an api and use Effect runs that fatch call when our component mount
import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

// whenver clicked shop then below function will be called
function Shop() {
  const [items, setItems] = useState([]);
  // whenerever there is a change in the render method <app>  it will triggert uaseeffect method
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const data1 = await fetch("http://localhost:5000/api/customers");
    const items1 = await data1.json();

    console.log(data1);
    console.log(items1);
    console.log(items1.data);
    setItems(items1);
  };
  return (
    <div>
            
      {/* this is to creat 2 dimension array having key value pair and then use
      .map on each 2 doimension array to extract key valuefrom it*/}
      {items.map((entry) => {
        let key = entry.id;
        let valuefirst = entry.firstName;
        let valuelast = entry.Lastname;
        // or, instead of ^, you could also use define
        // the params as `([key, value]) => {`

        return (
          <p key={key}>
            {key}: {valuefirst}{" "}{valuelast}
          </p>
        );
      })}
    </div>
  );
}

export default Shop;
