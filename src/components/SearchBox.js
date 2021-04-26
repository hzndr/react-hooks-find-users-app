//src/components/SearchBox.js
import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      className="input"
      type="search"
      placeholder="Find a user.."
      onChange={searchChange}
    />
  );
};

export default SearchBox;
