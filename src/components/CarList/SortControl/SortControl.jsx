import React from 'react';
import styles from './SortControl.css'
import classnames from 'classnames/bind';

let cx = classnames.bind(styles);

const SortControl = (props) => {
  const classes = cx(
    'SortControl',
    {
      'ascending': props.mode === 'ascending',
      'descending': props.mode === 'descending'
    }
  )

  return (
    <th className={classes} onClick={props.clickHandler}>{props.name}</th>
  );
}

export default SortControl;