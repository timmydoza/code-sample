import React from 'react';
import CarRow from './CarRow/CarRow';
import styles from './CarList.css';
import SortControl from './SortControl/SortControl';
import SearchField from './SearchField/SearchField';
import PaginationButtons from './PaginationButtons/PaginationButtons';

const CarList = (props) => {

  const carRows = props.cars.map((car) => (
    <CarRow
      {...car}
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

      <PaginationButtons
        totalPages={props.totalPages}
        currentPage={props.currentPage}
        setPage={props.setPage}
      />

    </div>
  );
}

export default CarList