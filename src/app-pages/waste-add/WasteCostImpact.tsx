"use client";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";

const StatCard = ({
  label,
  value,
  color = "text-black",
}: {
  label: string;
  value: string;
  color?: string;
}) => (
  <Card className="bg-white">
    <CardContent className="p-4 flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <span className={`text-xl font-bold ${color}`}>{value}</span>
    </CardContent>
  </Card>
);

const costImpactData = [
  { label: "Unit Cost", value: "2.450" },
  { label: "Total Waste Cost", value: "17.50" },
  { label: "Monthly Waste", value: "248.80" },
];

const fmt = (label: string, v: string) => {
  const n = Number(v || 0);
  const fd = label === "Unit Cost" ? 3 : 2;
  return `$${n.toLocaleString("en-US", {
    minimumFractionDigits: fd,
    maximumFractionDigits: fd,
  })}`;
};

const WasteCostImpact = () => {
  return (
    <SectionWrapper
      title="Cost Impact"
      className="!bg-transparent !shadow-none !p-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {costImpactData.map((item, index) => (
          <StatCard
            key={index}
            label={item.label}
            value={fmt(item.label, item.value)}
            color={
              item.label === "Total Waste Cost" ? "text-red-600" : "text-black"
            }
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WasteCostImpact;
