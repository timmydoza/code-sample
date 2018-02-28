import React from 'react';

const CarRow = (props) => {
  return (
    <tr onClick={props.clickHandler}>
      <td>{props.year}</td>
      <td>{props.make}</td>
      <td>{props.model}</td>
    </tr>
  );
}

export default CarRow;