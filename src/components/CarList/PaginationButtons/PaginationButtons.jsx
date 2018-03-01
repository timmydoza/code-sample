import React from 'react';
import styles from './PaginationButtons.css';

const PaginationButtons = (props) => {
  if (props.totalPages < 2) {
    return null;
  }

  return (
    <div className={styles.paginationButtons}>
      <button onClick={() => props.setPage(-1)}>&lt;</button>
      <span>{props.currentPage} of {props.totalPages}</span>
      <button onClick={() => props.setPage(1)}>&gt;</button>
    </div>
  );
}

export default PaginationButtons;