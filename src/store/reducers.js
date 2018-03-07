const SELECT_CAR = 'SELECT_CAR';

const initialState = {
    filteredSortedCars: [],
    sortOption: 'year',
    searchText: '',
    selectedCar: {},
    currentPage: 1,
    totalPages: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CAR:
      return {
        ...state, 
        selectedCar: action.key
      }
  }
  return state;
}