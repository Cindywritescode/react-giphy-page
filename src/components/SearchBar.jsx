import React, { useState } from 'react';

const SearchBar = ({
  searchFunction = () => {}
}) => {
  const [term, setTerm] = useState("");

  const handleUpdate = (event) => {
    setTerm(event.target.value);
    searchFunction(event.target.value);
  };

  return (
    <div className="searchbar">
      <input
        value={term}
        type="text"
        className="form-control form-search"
        onChange={handleUpdate}
      />
    </div>
  );
};

export default SearchBar;
