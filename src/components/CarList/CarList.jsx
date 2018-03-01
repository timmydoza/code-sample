import React from 'react';
import CarRow from './CarRow/CarRow';
import styles from './CarList.css';
import SortControl from './SortControl/SortControl';
import SearchField from './SearchField/SearchField';

const CarList = (props) => {

  const carRows = props.cars.map((car) => (
    <CarRow
      key={car.key}
      year={car.year}
      make={car.make}
      model={car.model}
      mileage={car.mileage}
      selected={car.key === props.selectedCarKey}
      clickHandler={ () => props.selectCar(car.key) }
    />
  ));

  return (

    <div>

      <SortControl setSort={props.setSort} />

      <SearchField setSearch={props.setSearch} />

      <table className={styles.CarList}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Make</th>
            <th>Model</th>
            <th>Mileage</th>
          </tr>
        </thead>

        <tbody>
          {carRows}
        </tbody>

      </table>

    </div>
  );
}

export default CarList