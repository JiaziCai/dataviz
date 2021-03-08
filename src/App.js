import "./App.css";
import React from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import BBChart from "./components/BBChart";
import RaceHorse from "./components/RaceHorse";
import Tree from "./components/Tree";
import GeoComp from "./components/GeoComp";
import Brush from "./components/Brush";

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
      <div style={{ marginBottom: "100px" }}></div>
      <GeoComp />
      <div style={{ marginBottom: "100px" }}></div>
      <Brush />
      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
}

export default App;
