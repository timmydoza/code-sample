import React from 'react';
import styles from './CarRow.css';

const CarRow = (props) => {
  return (
    <tr className={styles.CarRow} onClick={props.clickHandler}>
      <td>{props.year}</td>
      <td>{props.make}</td>
      <td>{props.model}</td>
      <td>{props.mileage}</td>
    </tr>
  );
}

export default CarRow;