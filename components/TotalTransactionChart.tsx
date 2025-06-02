"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useTheme } from "next-themes";

const data = [
  { name: "JAN", transactions: 1000 },
  { name: "FEB", transactions: 2000 },
  { name: "MAR", transactions: 4500 },
  { name: "APR", transactions: 7000 },
  { name: "MAY", transactions: 3500 },
  { name: "JUN", transactions: 2500 },
];

const TotalTransactionChart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[80%]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{
              fill: isDark ? "#B8A8CC" : "#666666",
              fontSize: window.innerWidth < 640 ? 10 : 12,
            }}
            interval={0}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: isDark ? "#B8A8CC" : "#666666",
              fontSize: window.innerWidth < 640 ? 10 : 12,
            }}
            width={window.innerWidth < 640 ? 40 : 60}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? "#241832" : "#ffffff",
              border: `1px solid ${isDark ? "#3D2B4F" : "#e5e5e5"}`,
              borderRadius: "8px",
              color: isDark ? "#E8E3F0" : "#333333",
              fontSize: "0.875rem",
            }}
          />
          <Legend
            verticalAlign="bottom"
            wrapperStyle={{
              fontSize: window.innerWidth < 640 ? "0.75rem" : "0.8rem",
              marginTop: "10px",
              color: isDark ? "#B8A8CC" : "#666666",
            }}
          />
          <Bar
            dataKey="transactions"
            fill={isDark ? "#9D7BEA" : "#2D0561"}
            barSize={
              window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 25 : 30
            }
            name="2022"
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalTransactionChart;
