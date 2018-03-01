import React from 'react';
import styles from './SortControl.css';

const SortControl = (props) => {

  return (
    <div className={styles.sortControl} >
      <label>
        Sort By: 
        <select onChange={(e) => props.setSort(e.target.value)}>
          <option value="year">Year - Oldest to Newest</option>
          <option value="mileage">Mileage - Highest to Lowest</option>
          <option value="created_at">Date Listed - Newest to Oldest</option>
        </select>
      </label>

    </div>
  );
}

export default SortControl;