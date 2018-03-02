import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './CarModal.css';

const cx = classnames.bind(styles);

const CarModal = (props) => {
  const overlayClasses = cx(
    'modalOverlay',
    {
      displayModal: props.selectedCarKey !== null
    },
  );

  return (
    <div className={overlayClasses} onClick={() => props.selectCar(null)}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <span className={styles.exit} onClick={() => props.selectCar(null)}>X</span>
        <ul>
          <li>Year: {props.year}</li>
          <li>Make: {props.make}</li>
          <li>Model: {props.model}</li>
          <li>Mileage: {props.mileage}</li>
        </ul>
        <img src={props.image_url} alt="" />
      </div>
    </div>
  );
};

CarModal.propTypes = {
  selectedCarKey: PropTypes.number,
  selectCar: PropTypes.func.isRequired,
  year: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  mileage: PropTypes.number,
  image_url: PropTypes.string,
};

CarModal.defaultProps = {
  selectedCarKey: null,
  year: undefined,
  make: undefined,
  model: undefined,
  mileage: undefined,
  image_url: undefined,
};

export default CarModal;
