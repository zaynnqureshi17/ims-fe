import WasteStatWithIconCard from "@/components/statistic/waste/WasteStatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { wasteIconPath } from "@/utils/PublicImageBaseUrl";

const WasteStat = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <WasteStatWithIconCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </GridWrapper>
  );
};

export default WasteStat;

const stats = [
  {
    title: "Total Waste Value",
    value: "230",
    icon: `${wasteIconPath}dollor.svg`,
  },
  {
    title: "Items Wasted",
    value: "18",
    icon: `${wasteIconPath}wasted.svg`,
  },
  {
    title: "Top Reason",
    value: "Expired",
    icon: `${wasteIconPath}clock.svg`,
  },
  {
    title: "This Week",
    value: "3247",
    icon: `${wasteIconPath}date.svg`,
  },
];
