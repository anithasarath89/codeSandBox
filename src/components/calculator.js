import React,{useState} from "react";
import Counter from "./counter";
import Operations from "./operations";


function Calculator() {
  var rows = [], i = 0, len = 5;
  while (++i <= len) rows.push(i);
  const [value, setOperations] = useState(0);
  return (
    <div>
    <tbody>
      {rows.map(function (i) {
        return <Counter setOperations={setOperations} length={i}/>;
      })}
    </tbody>
    <Operations value={value} length={i} />
    </div>
  );
}

export default Calculator;