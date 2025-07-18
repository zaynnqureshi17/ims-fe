"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", uv: 4000, pv: 2400 },
  { day: "Tue", uv: 3000, pv: 1398 },
  { day: "Wed", uv: 2000, pv: 9800 },
  { day: "Thu", uv: 2780, pv: 3908 },
  { day: "Fri", uv: 1890, pv: 4800 },
  { day: "Sat", uv: 2390, pv: 3800 },
  { day: "Sun", uv: 3490, pv: 4300 },
];

const AdminDashboardLinerChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* only horizontal dashed lines */}
        <CartesianGrid vertical={false} strokeDasharray="3" />

        {/* now using our weekday key */}
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* your two series */}
        <Line
          strokeOpacity={2}
          dataKey="pv"
          stroke="#FB923C"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AdminDashboardLinerChart;
