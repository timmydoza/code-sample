import React, { Component } from 'react';
import CarList from '../../components/CarList/CarList';
import CarModal from '../../components/CarModal/CarModal';
import styles from './CarFinder.css';
import API from '../../API/API';

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

  getSortFn(sortName, ascending) {
    return (a, b) => {
      const aVal = a[sortName];
      const bVal = b[sortName];

      if (aVal < bVal) {
        return ascending ? 1 : -1;
      }

      if (aVal > bVal) {
        return ascending ? -1 : 1;
      }

      return 0; //If they are the same

    }
  }

  setSort = (sortName) => {

    this.setState((prevState, props) => {

      let sortFn;

      switch (sortName) {
        case 'year':
          sortFn = this.getSortFn('year', true);
          break;
        case 'mileage':
          sortFn = this.getSortFn('mileage', true);
          break;
        case 'date':
          sortFn = this.getSortFn('createdAt', true);
          break;
      }
      
      return {
        sortOption: sortName,
        cars: prevState.cars.slice().sort(sortFn)
      };


    });

  }

  componentDidMount = () => {
    API().then(cars => {
      this.setState({
        cars: cars.slice().sort(this.getSortFn('year', true))
      })
    });
  }

  render() {

    return (
      <main className={styles.grid}>
        <CarList 
          cars={this.state.cars}
          selectCar={this.selectCar}
          selectedCarKey={this.state.selectedCarKey}
          setSort={this.setSort}
        />
        <CarModal />
      </main>
    );
  }
}

export default CarFinder;
