import React from "react";

const Operations = (props) => {
  return (
    <div>
      <tbody>Total Sum: {props.value}</tbody>
      <tbody>Average: {props.value / props.length}</tbody>
      <tbody>Max: {props.value}</tbody>
      <tbody>Min: {props.value}</tbody>
    </div>
  );
};

export default Operations;
