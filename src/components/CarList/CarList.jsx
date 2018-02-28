import React from 'react';
import CarRow from './CarRow/CarRow';

const CarList = (props) => {

  const carRows = props.cars.map((car) => (
    <CarRow
      key={car.key}
      year={car.year}
      make={car.make}
      model={car.model}
      clickHandler={ () => props.selectCar(car.key) }
    />
  ));

  return (
    <table>

      {carRows}

    </table>
  );
}

export default CarList