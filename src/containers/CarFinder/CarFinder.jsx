import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarList from '../../components/CarList/CarList';
import CarModal from '../../components/CarModal/CarModal';
import styles from './CarFinder.css';
import API from '../../API/API';
import debounce from 'lodash.debounce';
import { getSortFn, getFilterFn } from '../../utils/utils';

const ITEMS_PER_PAGE = 15;

export class CarFinder extends Component {

  state = {
    filteredSortedCars: [],
    sortOption: 'year',
    searchText: '',
    selectedCar: {},
    currentPage: 1,
    totalPages: null
  };

  // The list of all cars is stored here.  Used as a starting point for filtering.
  carMasterList = [];

  selectCar = (selectedCarKey) => {
    this.setState({
      selectedCarKey
    });
  }

  /**
   * Sets the sort option in the state.  Also updates the list of cars and resets the current page.
   * @sortOption  {string} - should be 'year', 'created_at', or 'mileage'
   */
  setSort = (sortOption) => {
    this.setState(prevState => {
      return {
        sortOption,
        currentPage: 1,
        filteredSortedCars: this.sortAndFilter(this.carMasterList, sortOption, prevState.searchText)
      }
    });
  }

  /**
   * Sets the search text in the state.  Also updates the list of cars and resets the current page.
   * @searchText  {string} - a space delimited string of search terms
   */
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


  /**
   * Sets the current page in the state.  Also checks to make sure the current page won't go out of range.
   * @pageChange  {number} - A number that will be added to the current page.  -1 to go back one page.
   */
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

  /**
   * Sorts and filters carArray by the provided sortOption and searchText
   * @carArray   {array} - and array of car objects
   * @sortOption {string} - from state
   * @searchText {string} - from state
   *
   * @returns    {array} Sorted array of car objects
   */
  sortAndFilter(carArray, sortOption, searchText) {
    //Filter returns new array.  Being careful to not mutate this.state.
    const cars = carArray.filter(getFilterFn(searchText));
    return cars.sort(getSortFn(sortOption));
  }

  /**
   * @carList  {array} - Array of car objects
   * @return   {number} - number of total pages the car list will take up
   */
  getTotalPages = carList => {
    return Math.ceil(carList.length / ITEMS_PER_PAGE);
  }

  /**
   * @carList  {array} - Array of car objects
   * @return   {[type]} - Spliced array of car objects that represents the cars to be shown on the current page.
   */
  paginate = carList => {
    const page = this.state.currentPage;
    return carList.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  }

  // /**
  //  * @return {object} - returns the currently selected car object
  //  */
  // getSelectedCar = () => {
  //   return this.state.filteredSortedCars.find(car => car.key === this.props.selectedCarKey);
  // }

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

  render() {

    return (
      <main className={styles.grid}>
        <CarList 
          cars={this.paginate(this.state.filteredSortedCars)}
          selectCar={this.props.selectCar}
          selectedCarKey={this.props.selectedCarKey}
          setSort={this.setSort}
          setSearch={this.setSearch}
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
          setPage={this.setPage}
        />
        <CarModal 
          selectCar={this.props.selectCar} 
          selectedCar={this.props.selectedCar} />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedCar: state.selectedCar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCar: (key) => dispatch({type: 'SELECT_CAR', key})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarFinder);
