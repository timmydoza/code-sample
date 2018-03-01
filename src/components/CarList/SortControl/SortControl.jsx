import React from 'react';

const SortControl = (props) => {

  return (
    <div>
      <label>
        Sort By:
        <select onChange={(e) => props.setSort(e.target.value)}>
          <option value="year">Year</option>
          <option value="mileage">Mileage</option>
          <option value="date">Date</option>
        </select>
      </label>

    </div>
  );
}

export default SortControl;