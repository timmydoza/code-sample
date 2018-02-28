import React, { Component } from 'react';
import CarList from '../../components/CarList/CarList';
import CarModal from '../../components/CarModal/CarModal';
import styles from './CarFinder.css';
import API from '../../API/API';

class CarFinder extends Component {

  state = {
    cars: [],
    sortOptions: {
      year: null,
      mileage: null,
      date: null
    },
    searchText: '',
    selectedCarKey: null,
  }

  selectCar = (selectedCarKey) => {
    this.setState({
      selectedCarKey
    });
  }

  getSortFn(sortName, sortMode) {

    if (!sortMode) {
      return Function.prototype; //for a no-op
    } else {
      return (a, b) => {
        const aVal = a[sortName];
        const bVal = b[sortName];
        const ascending = sortMode === 'ascending';

        if (aVal < bVal) {
          return ascending ? 1 : -1;
        }

        if (aVal > bVal) {
          return ascending ? -1 : 1;
        }

        return 0; //If they are the same

      }
    }

  }

  toggleSort = (sortName) => {
    let nextSortObj = {
      year: null,
      mileage: null,
      date: null
    }

    let nextSortMode;

    this.setState((prevState, props) => {
      
      switch (prevState.sortOptions[sortName]) {
        case 'ascending':
          nextSortMode = 'descending';
          break;
        case 'descending':
          nextSortMode = null;
          break;
        default:
          nextSortMode = 'ascending';
      }

      nextSortObj[sortName] = nextSortMode;

      return {
        sortOptions: nextSortObj,
        cars: prevState.cars.slice().sort(this.getSortFn(sortName, nextSortMode))
      };


    });

  }

  componentDidMount = () => {
    API().then(cars => {
      this.setState({
        cars
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
          sortOptions={this.state.sortOptions}
          toggleSort={this.toggleSort}
        />
        <CarModal />
      </main>
    );
  }
}

export default CarFinder;
