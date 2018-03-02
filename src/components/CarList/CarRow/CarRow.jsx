import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarRow.css';

const CarRow = props =>
  (
    <tr className={styles.CarRow} onClick={props.clickHandler}>
      <td>{props.year}</td>
      <td>{props.make}</td>
      <td>{props.model}</td>
      <td>{props.mileage}</td>
    </tr>
  );


CarRow.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
};

export default CarRow;
