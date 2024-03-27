

import  { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "blue",
  "green",
  "yellow",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MyBarChart = () => {
  const books = useLoaderData();
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const updateChartWidth = () => {
      const containerWidth = document.getElementById("chart-container").offsetWidth;
      setChartWidth(containerWidth);
    };
    updateChartWidth();
    window.addEventListener("resize", updateChartWidth);
    return () => window.removeEventListener("resize", updateChartWidth);
  }, []);

  return (
    <div className="mt-14" id="chart-container">
      <div className="container mx-auto pr-0 md:pr-0 pl-0 md:pl-0">
        <BarChart
          width={chartWidth}
          height={600}
          data={books}
          margin={{
            top: 20,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="bookName"
            tick={{ width: 100, fontSize: 12, angle: 0, dy: 10 }}
            angle={-10}
            textAnchor="center"
            interval={0}
            height={100}
          />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {books.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};
MyBarChart.demoUrl =
  "https://codesandbox.io/s/bar-chart-with-customized-shape-dusth";

export default MyBarChart;

