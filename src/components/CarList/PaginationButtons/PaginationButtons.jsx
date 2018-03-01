import React from 'react';

const PaginationButtons = (props) => {
  return (
    <div>
      <button onClick={() => props.setPage(-1)}>&lt;</button>
      <span>{props.currentPage} of {props.totalPages}</span>
      <button onClick={() => props.setPage(1)}>&gt;</button>
    </div>
  );
}

export default PaginationButtons;