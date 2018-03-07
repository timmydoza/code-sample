import * as actionTypes from './actionTypes';
import API from '../API/API';


export const selectCar = car => (
  {
    type: actionTypes.SELECT_CAR,
    car,
  }
);

export const getCars = () => (
  dispatch => API().then(cars => dispatch({
    type: actionTypes.SAVE_CARS,
    cars,
  }))
);

export const setPage = pageChange => (
  {
    type: actionTypes.SET_PAGE,
    pageChange,
  }
);

export const setSearch = searchText => (
  {
    type: actionTypes.SET_SEARCH,
    searchText,
  }
);

export const setSort = sortOption => (
  {
    type: actionTypes.SET_SORT,
    sortOption,
  }
);
