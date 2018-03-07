import * as actionTypes from './actionTypes';
import API from '../API/API';


export const selectCar = (car) => {
  return {
    type: actionTypes.SELECT_CAR,
    car
  }
}

export const getCars = () => {
  return dispatch => {
    API().then(cars => dispatch({
      type: actionTypes.SAVE_CARS,
      cars
    }));
  }
}

export const setPage = pageChange => {
  return {
    type: actionTypes.SET_PAGE,
    pageChange
  }
}

export const setSearch = searchText => {
  return {
    type: actionTypes.SET_SEARCH,
    searchText
  }
}

export const setSort = sortOption => {
  return {
    type: actionTypes.SET_SORT,
    sortOption
  }
}