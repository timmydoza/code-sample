import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarRow.css';

const CarRow = (props) => 
  return (
    <tr className={styles.CarRow} onClick={props.clickHandler}>
      <td>{props.year}</td>
      <td>{props.make}</td>
      <td>{props.model}</td>
      <td>{props.mileage}</td>
    </tr>
  );


CarRow.propTypes = {
  clickHandler: PropTypes.function.isRequired,
  year: PropTypes.number.isRequired,
  make: PropTypes.number.isRequired,
  model: PropTypes.number.isRequired,
  mileage: PropTypes.number.isRequired,
};

export default CarRow;
