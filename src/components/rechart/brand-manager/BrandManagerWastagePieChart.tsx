/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "RABBIT HOLE", value: 160 },
  { name: "DANCING FISH", value: 240 },
  { name: "TAP TAP", value: 240 },
  { name: "PICARO", value: 360 },
];

const COLORS = ["#FBBF24", "#FB923C", "#4B5563", "#291E48"];
const RADIAN = Math.PI / 180;

interface renderLabelLineProps {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  index: number;
}

const renderLabelLine = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  index,
}: renderLabelLineProps) => {
  const sx = cx + outerRadius * Math.cos(-midAngle * RADIAN);
  const sy = cy + outerRadius * Math.sin(-midAngle * RADIAN);
  const mx = cx + (outerRadius + 10) * Math.cos(-midAngle * RADIAN);
  const my = cy + (outerRadius + 10) * Math.sin(-midAngle * RADIAN);
  const ex = mx + (midAngle > 90 && midAngle < 270 ? -20 : 20);
  const ey = my;

  return (
    <path
      d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
      stroke={COLORS[index]}
      fill="none"
    />
  );
};
interface renderLabelprops {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  index: number;
}
const renderLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  index,
}: renderLabelprops) => {
  const r = outerRadius + 30;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      className="text-gray-400 text-sm"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="middle"
    >
      {data[index].name}
    </text>
  );
};

const BrandManagerWastagePieChart = () => (
  <ResponsiveContainer width="100%" height="100%" minHeight={240}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={0}
        outerRadius={80}
        // paddingAngle={2}
        // ← this adds the white divider between slices
        stroke="#fff"
        strokeWidth={2}
        labelLine={renderLabelLine}
        label={renderLabel as any}
      >
        {data.map((_, idx) => (
          <Cell key={idx} fill={COLORS[idx]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default BrandManagerWastagePieChart;
