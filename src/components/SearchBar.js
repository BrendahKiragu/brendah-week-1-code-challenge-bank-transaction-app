import React from 'react';

function SearchBar({ onSearch }) {

  //called when a user types a search term
  //onSearch fn updates the searchterm state in the App component
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className='search-bar'>
      <label>Search:  </label>
      <input 
        type="text" 
        placeholder="Search transactions..." 
        onChange={handleSearchChange} 
      />
    </div>
  );
}

export default SearchBar;
