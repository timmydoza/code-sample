import React from 'react';
import renderer from 'react-test-renderer';
import CarFinder from './CarFinder';

jest.mock('../../API/API');

describe('the CarFinder component', () => {
  let carFinder, setPage;

  beforeEach(() => {
    carFinder = renderer.create(<CarFinder />);
  });

  it('renders correctly', () => {
    expect(carFinder.toJSON()).toMatchSnapshot();
  });

  it('should reset the page if a filter occurs', () => {
    const instance = carFinder.getInstance();
    instance.setPage(1);
    instance.setSearch('testing');
    expect(instance.state.currentPage).toBe(1);
  });

  it('should reset the page if a sort occurs', () => {
    const instance = carFinder.getInstance();
    instance.setPage(1);
    instance.setSort('mileage');
    expect(instance.state.currentPage).toBe(1);
  });

  it('should not let pagination go out of range', () => {
    const instance = carFinder.getInstance();
    instance.setPage(-1);
    expect(instance.state.currentPage).toBe(1);
    instance.setPage(1);
    instance.setPage(1);
    instance.setPage(1);
    expect(instance.state.currentPage).toBe(2);
  });

});