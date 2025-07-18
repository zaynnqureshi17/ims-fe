import OutletManagerLabelWithStat from "@/components/statistic/outlet-manager/OutletManagerLabelWithStat";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const OutletManagerStuffMeal = () => {
  return (
    <SectionWrapper title="Staff Meal & Recipe Usage">
      <h2 className="px-4">Top Recipe Usage</h2>
      {stuffMeal.map((item, index) => (
        <OutletManagerLabelWithStat
          key={index}
          label={item.label}
          value={item.value}
        />
      ))}
      <h2 className="px-4">Top Recipe Usage</h2>
      {topReceipt.map((item, index) => (
        <OutletManagerLabelWithStat
          key={index}
          label={item.label}
          value={item.value}
        />
      ))}
    </SectionWrapper>
  );
};

export default OutletManagerStuffMeal;
const stuffMeal = [
  { label: "Breakfast", value: "12 portions" },
  { label: "Lunch", value: "18 portions" },
  { label: "Dinner", value: "15 portions" },
];

const topReceipt = [
  { label: "Classic Burger", value: "45 times" },
  { label: "Caesar Salad", value: "32 times" },
  { label: "Fish & Chips", value: "28 times" },
];