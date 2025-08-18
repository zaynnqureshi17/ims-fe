"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", activity: 20 },
  { day: "Tue", activity: 50 },
  { day: "Wed", activity: 20 },
  { day: "Thu", activity: 70 },
  { day: "Fri", activity: 100 },
  { day: "Sat", activity: 20 },
  { day: "Sun", activity: 50 },
];

const ReportPurchaseAnalyticsChart = () => (
  <ResponsiveContainer width="100%" height={240} className="!p-0 m-0">
    <LineChart data={data} margin={{ top: 10, bottom: 5, left: 0 }}>
      <CartesianGrid vertical={false} strokeDasharray="" />

      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        padding={{ left: 10, right: 10 }}
      />

      <YAxis
        width={40}
        axisLine={false}
        tickLine={false}
        ticks={[0, 25, 50, 75, 100]}
      />

      <Tooltip />

      <Line
        dataKey="activity"
        stroke="#F59E0B"
        strokeWidth={2}
        dot={{ r: 4, fill: "#F59E0B", strokeWidth: 0 }}
        activeDot={{ r: 6 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default ReportPurchaseAnalyticsChart;
