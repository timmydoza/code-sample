import React, { Component } from 'react';
import CarList from '../../components/CarList/CarList';
import CarModal from '../../components/CarModal/CarModal';
import styles from './CarFinder.css';
import API from '../../API/API';

class CarFinder extends Component {

  state = {
    cars: [],
    filters: {
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

  toggleSort = (filterName) => {
    let nextFilterObj = {
      year: null,
      mileage: null,
      date: null
    }

    let nextFilterMode;

    this.setState((prevState, props) => {
      
      switch (prevState.filters[filterName]) {
        case 'ascending':
          nextFilterMode = 'descending';
          break;
        case 'descending':
          nextFilterMode = null;
          break;
        default:
          nextFilterMode = 'ascending';
      }

      nextFilterObj[filterName] = nextFilterMode;

      return {filters: nextFilterObj};

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
          filters={this.state.filters}
          toggleSort={this.toggleSort}
        />
        <CarModal />
      </main>
    );
  }
}

export default CarFinder;
