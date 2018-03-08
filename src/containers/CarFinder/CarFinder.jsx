import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarList from '../../components/CarList/CarList';
import CarModal from '../../components/CarModal/CarModal';
import styles from './CarFinder.css';
import * as actions from './../../store/actions';

export class CarFinder extends Component {

  /**
   * @carList  {array} - Array of car objects
   * @return   {[type]} - Spliced array of car objects that represents the cars to be shown on the current page.
   */
  paginate = (carList) => {
    const ITEMS_PER_PAGE = this.props.ITEMS_PER_PAGE;
    const page = this.props.currentPage;
    return carList.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  }

  componentDidMount = () => {
    this.props.getCars();
  }

  render() {

    return (
      <main className={styles.grid}>
        <CarList 
          cars={this.paginate(this.props.filteredSortedCars)}
          selectCar={this.props.selectCar}
          selectedCarKey={this.props.selectedCarKey}
          setSort={this.props.setSort}
          setSearch={this.props.setSearch}
          currentPage={this.props.currentPage}
          totalPages={this.props.totalPages}
          setPage={this.props.setPage}
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
    selectedCar: state.selectedCar,
    filteredSortedCars: state.filteredSortedCars,
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    searchText: state.searchText,
    sortOption: state.sortOption,
    ITEMS_PER_PAGE: state.ITEMS_PER_PAGE
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCar: car => dispatch(actions.selectCar(car)),
    getCars: () => dispatch(actions.getCars()),
    setPage: pageChange => dispatch(actions.setPage(pageChange)),
    setSearch: searchText => dispatch(actions.setSearch(searchText)),
    setSort: sortOption => dispatch(actions.setSort(sortOption))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarFinder);
