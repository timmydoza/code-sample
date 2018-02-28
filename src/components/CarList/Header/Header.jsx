import React from 'react';
import SortControl from '../SortControl/SortControl';

const Header = (props) => {
  return (
    <thead>
      <tr>
        <SortControl name="Year" mode={props.sortOptions['year']} clickHandler={() => props.toggleSort('year')} />
        <SortControl name="Make" mode={props.sortOptions['make']} clickHandler={() => props.toggleSort('make')} />
        <SortControl name="Model" clickHandler={() => {} } />
        <SortControl name="Mileage" mode={props.sortOptions['mileage']} clickHandler={() => props.toggleSort('mileage')} />
      </tr>
    </thead>
  );
}

export default Header;