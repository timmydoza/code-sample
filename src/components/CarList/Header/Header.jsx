import React from 'react';
import SortControl from '../SortControl/SortControl';

const Header = (props) => {
  return (
    <thead>
      <tr>
        <SortControl name="Year" mode={props.filters['year']} clickHandler={() => props.toggleSort('year')} />
        <SortControl name="Make" mode={props.filters['make']} clickHandler={() => props.toggleSort('make')} />
        <SortControl name="Model" mode={props.filters['model']} clickHandler={() => props.toggleSort('model')} />
      </tr>
    </thead>
  );
}

export default Header;