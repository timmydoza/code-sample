import React from 'react';
import styles from './CarModal.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const CarModal = (props) => {

  const overlayClasses = cx(
    'modalOverlay',
    {
      'displayModal': props.selectedCarKey !== null
    }
  );

  return (
    <div className={overlayClasses} onClick={() => props.selectCar(null) }>
      <div className={styles.modal} onClick={(e) => e.stopPropagation() }>
        <span className={styles.exit} onClick={() => props.selectCar(null) }>x</span>
        <ul>
          <li>Year: {props.year}</li>
          <li>Make: {props.make}</li>
          <li>Model: {props.model}</li>
          <li>Mileage: {props.mileage}</li>
        </ul>
        <img src={props.image_url} />
      </div>
    </div>
  )
}

export default CarModal;