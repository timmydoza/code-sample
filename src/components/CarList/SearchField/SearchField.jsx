import React from 'react';

const SearchField = (props) => {
  return (
    <input type="text" onChange={e => props.setSearch(e.target.value) } /> 
  );
}

export default SearchField;