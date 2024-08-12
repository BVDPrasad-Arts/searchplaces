// src/components/SearchBox.js
import React, { useState } from 'react';
import './SearchBox.css'; // Include your styling here

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      className="search-box"
      placeholder="Search..."
    />
  );
};

export default SearchBox;
