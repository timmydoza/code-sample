import React from 'react';
import CarRow from './CarRow/CarRow';
import styles from './CarList.css';

const CarList = (props) => {

  const carRows = props.cars.map((car) => (
    <CarRow
      key={car.key}
      year={car.year}
      make={car.make}
      model={car.model}
      selected={car.key === props.selectedCarKey}
      clickHandler={ () => props.selectCar(car.key) }
    />
  ));

  return (
    <table className={styles.CarList}>

      <tbody>
        {carRows}
      </tbody>

    </table>
  );
}

export default CarList