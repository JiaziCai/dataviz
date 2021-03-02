import "./App.css";
import React from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import BBChart from "./components/BBChart";
import RaceHorse from "./components/RaceHorse";
import Tree from "./components/Tree";

function App() {
  return (
    <>
      <LineChart />
      <div style={{ marginBottom: "100px" }}></div>
      <BarChart />
      <div style={{ marginBottom: "100px" }}></div>
      <BBChart />
      <div style={{ marginBottom: "100px" }}></div>
      <RaceHorse />
      <div style={{ marginBottom: "100px" }}></div>
      <Tree />
    </>
  );
}

export default App;
