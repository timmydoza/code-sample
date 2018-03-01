import React, { Component } from 'react';
import CarList from '../../components/CarList/CarList';
import CarModal from '../../components/CarModal/CarModal';
import styles from './CarFinder.css';
import API from '../../API/API';
import { getSortFn, getFilterFn } from '../../utils/utils';

class CarFinder extends Component {

  state = {
    cars: [],
    sortOption: 'year',
    searchText: '',
    selectedCarKey: null,
  }

  selectCar = (selectedCarKey) => {
    this.setState({
      selectedCarKey
    });
  }

  setSort = (sortOption) => {
    this.setState({
      sortOption
    });
  }

  setSearch = (searchText) => {
    this.setState({
      searchText
    });
  }

  componentDidMount = () => {
    API().then(cars => {
      this.setState({
        cars
      });
    });
  }

  sortAndFilter(carArray) {
    //Filter returns new array.
    const cars = carArray.filter(getFilterFn(this.state.searchText));
    return cars.sort(getSortFn(this.state.sortOption));
  }

  render() {

    return (
      <main className={styles.grid}>
        <CarList 
          cars={this.sortAndFilter(this.state.cars)}
          selectCar={this.selectCar}
          selectedCarKey={this.state.selectedCarKey}
          setSort={this.setSort}
          setSearch={this.setSearch}
        />
        <CarModal />
      </main>
    );
  }
}

export default CarFinder;
