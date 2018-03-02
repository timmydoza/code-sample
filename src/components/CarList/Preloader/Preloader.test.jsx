import React from 'react';
import renderer from 'react-test-renderer';
import Preloader from './Preloader';

jest.useFakeTimers();

describe('the Preloader component', () => {
  let mockFn;
  let preloader;

  beforeEach(() => {
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
    jest.runAllTimers();
    expect(mockFn.mock.calls).toEqual([['test.jpg']]);
  });

  it('should not trigger an image load if the mouse hovers for less than 300ms', () => {
    preloader.props.onMouseEnter();
    preloader.props.onMouseLeave();
    jest.runAllTimers();
    expect(mockFn.mock.calls.length).toBe(0);
  });

});
