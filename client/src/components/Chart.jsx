import React from 'react'
//import {Bar,BarChart,CartesianGrid,Legend,ResponsiveContainer,Tooltip,} from "recharts";
import { chartData } from "../assets/data";

const Chart = () => {
  return (
    <>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart width={150} height={40} data={chartData}>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Chart