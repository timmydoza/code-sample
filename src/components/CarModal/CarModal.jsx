import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './CarModal.css';

const cx = classnames.bind(styles);

const CarModal = (props) => {
  const overlayClasses = cx(
    'modalOverlay',
    {
      displayModal: Object.values(props.selectedCar).length !== 0
    },
  );

  const dateDisplay = (new Date(props.selectedCar.created_at)).toLocaleString('en-US', {timeZone: 'UTC'});

  return (
    <div className={overlayClasses} onClick={() => props.selectCar({})}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <span className={styles.exit} onClick={() => props.selectCar({})}>X</span>
        <ul>
          <li>Year: {props.selectedCar.year}</li>
          <li>Make: {props.selectedCar.make}</li>
          <li>Model: {props.selectedCar.model}</li>
          <li>Mileage: {props.selectedCar.mileage}</li>
          <li>Listing Date: {dateDisplay}</li>
        </ul>
        <img src={props.selectedCar.image_url} alt="" />
      </div>
    </div>
  );
};

CarModal.propTypes = {
  selectedCar: PropTypes.object,
  selectCar: PropTypes.func.isRequired,
  year: PropTypes.number,
  make: PropTypes.string,
  model: PropTypes.string,
  mileage: PropTypes.number,
  image_url: PropTypes.string,
};

CarModal.defaultProps = {
  selectedCar: null,
  year: undefined,
  make: undefined,
  model: undefined,
  mileage: undefined,
  image_url: undefined,
};

export default CarModal;
