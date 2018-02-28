import React, { Component } from 'react';
import CarList from '../../components/CarList/CarList';
import CarModal from '../../components/CarModal/CarModal';

class CarFinder extends Component {

  state = {
    cars: [],
    filters: {
      year: null,
      mileage: null,
      date: null
    },
    searchText: '',
    selectedCar: null
  }



  render() {
    return (
      <main>
        <CarList />
        <CarModal />
      </main>
    );
  }
}

export default CarFinder;
