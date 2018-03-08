import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

jest.mock('./API/API');

describe('the carFinder app', () => {
  it('should render correctly', (done) => {
    const app = renderer.create(<App/>)
    setImmediate(() => { // To deal with the promise in mock API;
      expect(app).toMatchSnapshot();
      done();
    });
  });
});
