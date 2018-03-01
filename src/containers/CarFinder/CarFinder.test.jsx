import React from 'react';
import renderer from 'react-test-renderer';
import CarFinder from './CarFinder';

jest.mock('../../API/API');

describe('the CarFinder component', () => {
  let carFinder, setPage;

  beforeEach(() => {
    carFinder = renderer.create(<CarFinder />);
    debugger;
  });

  it('renders correctly', () => {
    expect(carFinder.toJSON()).toMatchSnapshot();
  });

});