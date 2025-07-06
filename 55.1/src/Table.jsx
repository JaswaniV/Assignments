import React, { useState } from "react";
import TableRow from "./TableRow";

function Table() {
  const [num, setNum] = useState(2);

  function inc() {
    setNum(num + 1);
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={inc}
        className="bg-blue-600 text-white border-none px-5 py-2 text-lg font-bold rounded-lg cursor-pointer mb-4 hover:bg-blue-700 transition"
      >
        Next
      </button>

      <div className="flex flex-col items-center space-y-2">
        <TableRow number={num} index={1} />
        <TableRow number={num} index={2} />
        <TableRow number={num} index={3} />
        <TableRow number={num} index={4} />
      </div>
    </div>
  );
}

export default Table;
