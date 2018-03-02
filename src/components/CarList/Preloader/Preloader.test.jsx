import React from 'react';
import renderer from 'react-test-renderer';
import Preloader from './Preloader';

jest.useFakeTimers();

describe('the Preloader component', () => {
  let mockFn;
  let preloader;

  beforeEach(() => {
    setTimeout.mockClear()
    preloader = renderer.create(<Preloader imageUrl="test.jpg"><div test="test"></div></Preloader>).toJSON();
    mockFn = jest.fn();
    global.Image = class Image { //Mock for the window.Image class
      set src(source) {
        mockFn(source);
      }
    }
  });

  it('should trigger an image load if the mouse hovers for over 300ms', () => {
    preloader.props.onMouseEnter();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    jest.runAllTimers();
    expect(mockFn.mock.calls).toEqual([['test.jpg']]);
  });

  it('should not trigger an image load if the mouse hovers for less than 300ms', () => {
    preloader.props.onMouseEnter();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    preloader.props.onMouseLeave();
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(clearTimeout).toHaveBeenLastCalledWith(expect.any(Number));
    jest.runAllTimers();
    expect(mockFn.mock.calls.length).toBe(0);
  });

});
