import React, { useRef, useEffect, useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisRight,
  scaleLinear,
} from "d3";
import useResizeObserver from "../hooks/useResizeObserver";

function LineChart() {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, dimensions.width]);

    const yScale = scaleLinear().domain([0, 150]).range([dimensions.height, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);
    const yAxis = axisRight(yScale);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis);

    svg
      .select(".y-axis")
      .style("transform", `translateX(${dimensions.width}px)`)
      .call(yAxis);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data, dimensions]);

  return (
    <React.Fragment>
      <div ref={wrapperRef}>
        <svg ref={svgRef}>
          <g className='x-axis' />
          <g className='y-axis' />
        </svg>
      </div>
      <br />
      <button
        onClick={() => {
          setData(data.map((val) => val + 5));
        }}
      >
        Update data
      </button>
      <button
        onClick={() => {
          setData(data.filter((val) => val <= 35));
        }}
      >
        Filter data
      </button>
    </React.Fragment>
  );
}

export default LineChart;
