
import React from 'react';

function SearchBar({ onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or category..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;