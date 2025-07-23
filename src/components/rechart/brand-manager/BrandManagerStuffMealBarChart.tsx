"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "RABBIT\nHOLE", value: 80000 },
  { name: "DANCING\nFISH", value: 55000 },
  { name: "TAP\nTAP", value: 20000 },
  { name: "PICARO", value: 65000 },
  { name: "BUSHIDO", value: 100000 },
];

const BrandManagerStuffMealBarChart = () => (
  <ResponsiveContainer width="100%" height="100%" minHeight={240}>
    <BarChart data={data} margin={{ top: 10, right: 20, bottom: 20 }}>
      <CartesianGrid vertical={false} />

      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        interval={0}
        tick={{ fill: "#9CA3AF", fontSize: 12 }}
      />

      <YAxis
        axisLine={false}
        tickLine={false}
        ticks={[0, 25000, 50000, 75000, 100000]}
        tickFormatter={(n) => `${n / 1000}k`}
        width={40}
      />

      <Tooltip
        formatter={(n: number) => `${n / 1000}k`}
        cursor={{ fill: "rgba(0,0,0,0.05)" }}
      />

      <Bar dataKey="value" fill="#FB923C" barSize={40} radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

export default BrandManagerStuffMealBarChart;
