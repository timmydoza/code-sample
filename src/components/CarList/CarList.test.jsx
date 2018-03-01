import React from 'react';
import renderer from 'react-test-renderer';
import CarList from './CarList';

const testProps = {
  currentPage: 3,
  totalPages: 6,
  setPage: jest.fn(),
  setSort: jest.fn(),
  setSearch: jest.fn(),
  cars: [
    {
      key: 1,
      make: 'Testmake',
      model: 'Testmodel',
      year: 1999,
      mileage: 20000
    },
    {
      key: 2,
      make: 'Testmake2',
      model: 'Testmodel2',
      year: 1998,
      mileage: 20001
    }
  ]
};

describe('the CarList component', () => {
  // let paginationButtons, setPage;

  // beforeEach(() => {
  //   setPage = jest.fn();
  //   paginationButtons = renderer
  //     .create(<PaginationButtons currentPage="4" totalPages="11" setPage={setPage}/>)
  //     .toJSON()
  // });

  it('renders correctly', () => {
    const carList = renderer.create(<CarList {...testProps} />).toJSON();
    expect(carList).toMatchSnapshot();
  });

  it('should show a message if there are no results to show', () => {
    const testData = {...testProps};
    testData.cars = [];
    const carList = renderer.create(<CarList {...testData} />).toJSON();
    expect(carList).toMatchSnapshot();
  });

});