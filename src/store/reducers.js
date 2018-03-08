import * as actionTypes from './actionTypes';
import { sortAndFilter } from './../utils/utils';

export const initialState = {
  allCars: [],
  filteredSortedCars: [],
  sortOption: 'year',
  searchText: '',
  selectedCar: {},
  currentPage: 1,
  totalPages: null,
  ITEMS_PER_PAGE: 15,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CAR:
      return {
        ...state,
        selectedCar: action.car,
      };
    case actionTypes.SAVE_CARS:
      return {
        ...state,
        allCars: action.cars,
        totalPages: Math.ceil(action.cars.length / state.ITEMS_PER_PAGE),
        filteredSortedCars: sortAndFilter(action.cars, state.sortOption, state.searchText),
      };
    case actionTypes.SET_PAGE: {
      let newPage = state.currentPage + action.pageChange;

      if (newPage < 1) {
        newPage = 1;
      }

      if (newPage > state.totalPages) {
        newPage = state.totalPages;
      }

      return {
        ...state,
        currentPage: newPage,
      };
    }
    case actionTypes.SET_SEARCH: {
      const filteredSortedCars = sortAndFilter(state.allCars, state.sortOption, action.searchText);
      return {
        ...state,
        searchText: action.searchText,
        currentPage: 1,
        totalPages: Math.ceil(filteredSortedCars.length / state.ITEMS_PER_PAGE),
        filteredSortedCars,
      };
    }
    case actionTypes.SET_SORT: {
      const filteredSortedCars = sortAndFilter(state.allCars, action.sortOption, state.searchText);
      return {
        ...state,
        sortOption: action.sortOption,
        currentPage: 1,
        totalPages: Math.ceil(filteredSortedCars.length / state.ITEMS_PER_PAGE),
        filteredSortedCars,
      };
    }
    default:
  }
  return state;
};
