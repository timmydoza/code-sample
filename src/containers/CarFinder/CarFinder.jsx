import React, { Component } from 'react';
import CarList from '../../components/CarList/CarList';
import CarModal from '../../components/CarModal/CarModal';
import styles from './CarFinder.css';
import API from '../../API/API';
import { getSortFn, getFilterFn } from '../../utils/utils';

const ITEMS_PER_PAGE = 50;

class CarFinder extends Component {

  state = {
    cars: [],
    sortOption: 'year',
    searchText: '',
    selectedCarKey: null,
    currentPage: 1,
    totalPages: null
  }

  selectCar = (selectedCarKey) => {
    this.setState({
      selectedCarKey
    });
  }

  setSort = (sortOption) => {
    this.setState({
      sortOption,
      currentPage: 1
    });
  }

  setSearch = (searchText) => {
    this.setState({
      searchText,
      currentPage: 1
    });
  }

  componentDidMount = () => {
    API().then(cars => {
      this.setState({
        cars,
        totalPages: Math.ceil(cars.length / ITEMS_PER_PAGE)
      });
    });
  }

  setPage = (pageChange) => {
    this.setState(prevState => {
      let newPage = prevState.currentPage + pageChange;

      if (newPage < 1) {
        newPage = 1;
      }

      if (newPage > prevState.totalPages) {
        newPage = prevState.totalPages;
      }

      return {
        currentPage: newPage
      }

    });
  }

  sortFilterAndPaginate(carArray) {
    //Filter returns new array.  Being careful to not mutate this.state.
    const cars = carArray.filter(getFilterFn(this.state.searchText));
    cars.sort(getSortFn(this.state.sortOption));
    return cars.splice((this.state.currentPage - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE);
  }

  render() {

    return (
      <main className={styles.grid}>
        <CarList 
          cars={this.sortFilterAndPaginate(this.state.cars)}
          selectCar={this.selectCar}
          selectedCarKey={this.state.selectedCarKey}
          setSort={this.setSort}
          setSearch={this.setSearch}
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
          setPage={this.setPage}
        />
        <CarModal />
      </main>
    );
  }
}

export default CarFinder;
