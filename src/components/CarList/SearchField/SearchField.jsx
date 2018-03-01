import React from 'react';

const SearchField = (props) => {
  return (
    <div>
      <span>Search: </span>
      <input type="text" onChange={e => props.setSearch(e.target.value) } /> 
    </div>
  );
}

export default SearchField;