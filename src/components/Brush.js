import React, { useState } from "react";
import BrushChart from "./BrushChart";
import BrushChartChild from "./BrushChartChild";

function Brush() {
  const [data, setData] = useState(
    Array.from({ length: 30 }).map(() => Math.round(Math.random() * 100))
  );
  const onAddDataClick = () =>
    setData([...data, Math.round(Math.random() * 100)]);

  return (
    <React.Fragment>
      <h2>Visually filtering data with d3-brush</h2>
      <BrushChart data={data}>
        {(selection) => <BrushChartChild data={data} selection={selection} />}
      </BrushChart>
      <button onClick={onAddDataClick}>Add data</button>
    </React.Fragment>
  );
}

export default Brush;
