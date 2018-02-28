import React from 'react';
import styles from './CarRow.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const CarRow = (props) => {
  return (
    <tr onClick={props.clickHandler}
        className={cx('CarRow', {'selected': props.selected})}>
      <td>{props.year}</td>
      <td>{props.make}</td>
      <td>{props.model}</td>
    </tr>
  );
}

export default CarRow;