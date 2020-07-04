import React, { useState } from "react";
import "../App.css";

function Search() {
  const [name, setnewName] = useState();

  let updatedName = (e) => {
    setnewName(e.target.value);
  };

  return (
    <div>
      {
        <form method="get">
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
