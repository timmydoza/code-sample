import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarRow.css';
import Preloader from '../Preloader/Preloader';

const CarRow = props =>
  (
    <Preloader imageUrl={props.image_url}>
      <tr className={styles.CarRow} onClick={props.clickHandler}>
        <td>{props.year}</td>
        <td>{props.make}</td>
        <td>{props.model}</td>
        <td>{props.mileage}</td>
      </tr>
    </Preloader>
  );


CarRow.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
};

export default CarRow;
