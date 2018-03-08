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
      mileage: 20000,
      image_url: 'test.jpg',
      created_at: '2017-11-01T08:05:07.188Z'
    },
    {
      key: 2,
      make: 'Testmake2',
      model: 'Testmodel2',
      year: 1998,
      mileage: 20001,
      image_url: 'test2.jpg',
      created_at: '2017-11-01T08:05:07.188Z'
    },
  ],
};

describe('the CarList component', () => {
  it('renders correctly', () => {
    const carList = renderer.create(<CarList {...testProps} />).toJSON();
    expect(carList).toMatchSnapshot();
  });

  it('should show a message if there are no results to show', () => {
    const testData = { ...testProps };
    testData.cars = [];
    const carList = renderer.create(<CarList {...testData} />).toJSON();
    expect(carList).toMatchSnapshot();
  });
});
