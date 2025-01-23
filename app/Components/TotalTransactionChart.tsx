"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "JAN", transactions: 1000 },
  { name: "FEB", transactions: 2000 },
  { name: "MAR", transactions: 4500 },
  { name: "APR", transactions: 7000 },
  { name: "MAY", transactions: 3500 },
  { name: "JUN", transactions: 2500 },
];

const TotalTransactionChart = () => {
  return (
    <div className="w-full h-[80%]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} 
       />
          <YAxis axisLine={false}  tickLine={false}  />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{ fontSize: "0.8rem", marginTop: "10px" }}
          />
          <Bar dataKey="transactions" fill="#2D0561" barSize={30} name="2022" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalTransactionChart;
