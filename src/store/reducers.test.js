import reducer, { initialState } from './reducers';

describe('the reducer', () => {
  it('should return the default state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});