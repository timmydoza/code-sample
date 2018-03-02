import React from 'react';
import renderer from 'react-test-renderer';
import CarRow from './CarRow';

const testCar = {
  make: 'TestMake',
  model: 'TestModel',
  year: 1999,
  mileage: 1234,
  image_url: 'test.jpg',
};

it('renders correctly', () => {
  const tree = renderer
    .create(<CarRow {...testCar} clickHandler={Function.prototype} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
