import React, { useState } from "react";
import "../App.css";

function Search() {
  const [name, setnewName] = useState();

  let updatedName = (e) => {
    e.preventDefault();
    setnewName(e.target.value);
  };

  function handlesubmit() {}

  return (
    <div>
      {
        <form method="get" onsubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Enter here for search"
            name="userSearch"
            value={name}
            onchange={updatedName}
          />

          <button type="submit">Search</button>
        </form>
      }
    </div>
  );
}

export default Search;
