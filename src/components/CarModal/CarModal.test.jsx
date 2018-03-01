import React from 'react';
import renderer from 'react-test-renderer';
import CarModal from './CarModal';

const testCar = {
  make: 'TestMake',
  model: 'TestModel',
  year: 1999,
  mileage: 1234,
  image_url: 'image.jpg'
};

const nullVal = null; //Just using {null} below was messing up syntax highlighting.

describe('the CarModal component', () => {

  it('renders correctly', () => {
    const carModal = renderer
      .create(<CarModal {...testCar} selectCar={jest.fn()} selectedCarKey="1" />)
      .toJSON()
    expect(carModal).toMatchSnapshot();
  });

  it('should not have display class if selectedCarKey is null', () => {
    const carModal = renderer
      .create(<CarModal {...testCar} selectCar={jest.fn()} selectedCarKey={null} />).toJSON();
    expect(carModal.props.className).toBe('modalOverlay'); //theres no display class
  });

  it('should set the selectedCarKey to null when the user closes the modal', () => {
    const selectCar = jest.fn();
    const carModal = renderer
      .create(<CarModal {...testCar} selectCar={selectCar} selectedCarKey="1" />).toJSON();
    carModal.props.onClick();
    carModal.children[0].children[0].props.onClick(); //click both buttons
    expect(selectCar.mock.calls).toEqual([[null],[null]]);
  });

  it('clicks on the modal itself should not propagate', () => {
    const stopPropagation = jest.fn();
    const carModal = renderer
      .create(<CarModal {...testCar} selectCar={jest.fn()} selectedCarKey="1" />).toJSON();
    carModal.children[0].props.onClick({
      stopPropagation
    });
    expect(stopPropagation.mock.calls.length).toBe(1);
  });

});