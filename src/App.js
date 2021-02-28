import "./App.css";
import React from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";

function App() {
  return (
    <>
      <LineChart />
      <div style={{ marginBottom: "100px" }}></div>
      <BarChart />
    </>
  );
}

export default App;
