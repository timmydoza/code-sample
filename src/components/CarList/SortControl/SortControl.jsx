import React from 'react';
import styles from './SortControl.css'
import classnames from 'classnames/bind';

let cx = classnames.bind(styles);

const SortControl = (props) => {
  const classes = cx(
    'SortControl',
    {
      'ascending': props.mode === 'ascending',
      'descending': props.mode === 'descending'
    }
  )

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