/**
 * Returns a compare function to be used with Array.sort()
 * @sortName  {string} - if the sortName is 'year' then the order of the sort is reversed.
 * @return    {[Function]}
 */
export const getSortFn = (sortName) => {
  const descending = sortName === 'year';

  return (a, b) => {
    const aVal = a[sortName];
    const bVal = b[sortName];

    if (aVal < bVal) {
      return descending ? -1 : 1;
    }

    if (aVal > bVal) {
      return descending ? 1 : -1;
    }

    return 0; // If they are the same
  };
};

/**
 * Returns a predicate function to be used with Array.filter()
 * @searchText  {string} - the space delimited string of search terms.
 * @return      {[Function]}
 */
export const getFilterFn = (searchText) => {
  const searchTerms = searchText.split(' ');

  return (car) => {
    const carTerms = [car.year.toString(), car.make, car.model];

    return searchTerms.every((searchTerm) => {
      return carTerms.some((carTerm) => {
        const searchRegex = new RegExp(searchTerm, 'i');
        return searchRegex.test(carTerm);
      });
    });
  };
};

/**
 * Sorts and filters carArray by the provided sortOption and searchText
 * @carArray   {array} - and array of car objects
 * @sortOption {string} - from state
 * @searchText {string} - from state
 *
 * @returns    {array} Sorted array of car objects
 */
export const sortAndFilter = (carArray, sortOption, searchText) => {
  //Filter returns new array.  Being careful to not mutate carArray.
  const cars = carArray.filter(getFilterFn(searchText));
  return cars.sort(getSortFn(sortOption));
}
