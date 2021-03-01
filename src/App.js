import "./App.css";
import React from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import BBChart from "./components/BBChart";

function App() {
  return (
    <>
      <LineChart />
      <div style={{ marginBottom: "100px" }}></div>
      <BarChart />
      <div style={{ marginBottom: "100px" }}></div>
      <BBChart />
    </>
  );
}

export default App;
