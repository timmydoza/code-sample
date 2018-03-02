const getSortFn = (sortName) => {
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

const getFilterFn = (searchText) => {
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

export { getSortFn, getFilterFn };
