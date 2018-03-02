import React from 'react';
import PropTypes from 'prop-types';

const SearchField = props =>
  (
    <div>
      <span>Search: </span>
      <input type="text" onChange={e => props.setSearch(e.target.value)} />
    </div>
  );

SearchField.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default SearchField;
