import React from 'react';
import renderer from 'react-test-renderer';
import CarModal from './CarModal';

const testCar = {
  make: 'TestMake',
  model: 'TestModel',
  year: 1999,
  mileage: 1234,
  image_url: 'image.jpg',
  created_at: '2017-11-01T08:05:07.188Z'
};

const emptyObj = {};

describe('the CarModal component', () => {

  it('renders correctly', () => {
    const carModal = renderer
      .create(<CarModal selectCar={jest.fn()} selectedCar={testCar} />).toJSON();
    expect(carModal).toMatchSnapshot();
  });

  it('should not have display class if selectedCar is empty', () => {
    const carModal = renderer
      .create(<CarModal selectCar={jest.fn()} selectedCar={emptyObj} />).toJSON();
    expect(carModal.props.className).toBe('modalOverlay'); //theres no 'display' class
  });

  it('should set the selectedCarKey to an empty object when the user closes the modal', () => {
    const selectCar = jest.fn();
    const carModal = renderer
      .create(<CarModal selectCar={selectCar} selectedCar={testCar} />).toJSON();
    carModal.props.onClick();
    carModal.children[0].children[0].props.onClick(); //click both buttons
    expect(selectCar.mock.calls).toEqual([[{}], [{}]]);
  });

  it('clicks on the modal itself should not propagate', () => {
    const stopPropagation = jest.fn();
    const carModal = renderer
      .create(<CarModal selectCar={jest.fn()} selectedCar={testCar} />).toJSON();
    carModal.children[0].props.onClick({
      stopPropagation,
    });
    expect(stopPropagation.mock.calls.length).toBe(1);
  });

});
