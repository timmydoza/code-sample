import React from 'react';
import renderer from 'react-test-renderer';
import PaginationButtons from './PaginationButtons';

describe('the PaginationButtons component', () => {
  let paginationButtons, setPage;

  beforeEach(() => {
    setPage = jest.fn();
    paginationButtons = renderer
      .create(<PaginationButtons currentPage="4" totalPages="11" setPage={setPage}/>)
      .toJSON()
  });

  it('renders correctly', () => {
    expect(paginationButtons).toMatchSnapshot();
  });

  it('has working buttons', () => {
    paginationButtons.children[0].props.onClick();
    paginationButtons.children[2].props.onClick(); //Click the buttons
    expect(setPage.mock.calls).toEqual([[-1],[1]]);
  })

});