import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip, 
  Legend
} from "recharts";
import { RechartsDevtools } from '@recharts/devtools';

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" padding={{left:10, right:20}}/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="MarineSpecies"
        fill="#4C8CE4"
        radius={[10, 10, 0, 0]}
        animationDuration={1200}
        label={{ position: "top" }}
      />
      <Bar
        dataKey="WildlifeSpecies"
        fill="#408A71"
        radius={[10, 10, 0, 0]}
        animationDuration={1200}
        label={{ position: "top" }}
      />
      <Bar
        dataKey="BirdsSpecies"
        fill="#8C5A3C"
        radius={[10, 10, 0, 0]}
        animationDuration={1200}
        label={{ position: "top" }}
      />
    </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
