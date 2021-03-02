import React, { useState } from "react";
import TreeChart from "./TreeChart";

const initialData = {
  name: "😐",
  children: [
    {
      name: "🙂",
      children: [
        {
          name: "😀",
          children: [
            {
              name: "😀",
            },
            {
              name: "😁",
            },
            {
              name: "🤣",
              children: [
                {
                  name: "😀",
                },
                {
                  name: "😁",
                },
                {
                  name: "🤣",
                },
              ],
            },
          ],
        },
        {
          name: "😁",
        },
        {
          name: "🤣",
        },
      ],
    },
    {
      name: "😔",
    },
  ],
};

function Tree() {
  const [data, setData] = useState(initialData);

  return (
    <React.Fragment>
      <h1>Animated Tree Chart</h1>
      <TreeChart data={data} />
      <button onClick={() => setData(initialData.children[0])}>
        Update data
      </button>
    </React.Fragment>
  );
}

export default Tree;
