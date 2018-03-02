import React from 'react';
import PropTypes from 'prop-types';
import CarRow from './CarRow/CarRow';
import styles from './CarList.css';
import SortControl from './SortControl/SortControl';
import SearchField from './SearchField/SearchField';
import PaginationButtons from './PaginationButtons/PaginationButtons';

const CarList = (props) => {
  let carRows;

  if (props.cars.length > 0) {
    carRows = props.cars.map(car => (
      <CarRow
        {...car}
        clickHandler={() => props.selectCar(car.key)}
      />
    ));
  } else {
    carRows = (
      <tr>
        <td className={styles.noBorder}>No results found.</td>
      </tr>
    );
  }

  return (

    <div>

      <div className={styles.filterContainer} >
        <SortControl setSort={props.setSort} />
        <SearchField setSearch={props.setSearch} />
      </div>

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
};

CarList.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  setPage: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  cars: PropTypes.array.isRequired,
};

CarList.defaultProps = {
  totalPages: 1,
  currentPage: 1,
};

export default CarList;
