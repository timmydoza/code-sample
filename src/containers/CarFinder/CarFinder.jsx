import React, { Component } from 'react';
import CarList from '../../components/CarList/CarList';
import CarModal from '../../components/CarModal/CarModal';
import styles from './CarFinder.css';
import API from '../../API/API';
import debounce from 'lodash.debounce';
import { getSortFn, getFilterFn } from '../../utils/utils';

const ITEMS_PER_PAGE = 15;

class CarFinder extends Component {

  state = {
    filteredSortedCars: [],
    sortOption: 'year',
    searchText: '',
    selectedCarKey: null,
    currentPage: 1,
    totalPages: null
  };

  carMasterList = [];

  selectCar = (selectedCarKey) => {
    this.setState({
      selectedCarKey
    });
  }

  setSort = (sortOption) => {
    this.setState(prevState => {
      return {
        sortOption,
        currentPage: 1,
        filteredSortedCars: this.sortAndFilter(this.carMasterList, sortOption, prevState.searchText)
      }
    });
  }

  setSearch = debounce(searchText => {
    this.setState(prevState => {
      const filteredSortedCars = this.sortAndFilter(this.carMasterList, prevState.sortOption, searchText);
      return {
        searchText,
        currentPage: 1,
        filteredSortedCars,
        totalPages: this.getTotalPages(filteredSortedCars)
      }
    });
  }, 50)

  componentDidMount = () => {
    API().then(cars => {
      this.carMasterList = cars;
      this.setState(prevState => {
        const filteredSortedCars = this.sortAndFilter(cars, prevState.sortOption, prevState.searchText);
        return {
          filteredSortedCars,
          totalPages: this.getTotalPages(filteredSortedCars)
        }
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

  sortAndFilter(carArray, sortOption, searchText) {
    //Filter returns new array.  Being careful to not mutate this.state.
    const cars = carArray.filter(getFilterFn(searchText));
    return cars.sort(getSortFn(sortOption));
  }

  getTotalPages = carList => {
    return Math.ceil(carList.length / ITEMS_PER_PAGE);
  }

  paginate = carList => {
    const page = this.state.currentPage;
    return carList.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  }

  getSelectedCar = () => {
    return this.state.filteredSortedCars.find(car => car.key === this.state.selectedCarKey);
  }

  render() {

    return (
      <main className={styles.grid}>
        <CarList 
          cars={this.paginate(this.state.filteredSortedCars)}
          selectCar={this.selectCar}
          selectedCarKey={this.state.selectedCarKey}
          setSort={this.setSort}
          setSearch={this.setSearch}
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
          setPage={this.setPage}
        />
        <CarModal 
          { ...this.getSelectedCar() } 
          selectCar={this.selectCar} 
          selectedCarKey={this.state.selectedCarKey} />
      </main>
    );
  }
}

export default CarFinder;
