import React from "react";

function TableRow({ number, index }) {
  return (
    <div className="text-xl text-blue-700 font-medium">{number} x {index} = {number * index}</div>
  );
}

export default TableRow;
