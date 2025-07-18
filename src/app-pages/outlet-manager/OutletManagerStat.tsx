import OutletManagerStatWithIconCard, {
  OutletManagerStatWithIconCardProps,
} from "@/components/statistic/outlet-manager/OutletManagerStatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { Clipboard, Clock, ShoppingCart, Trash2 } from "lucide-react";

const OutletManagerStat = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {Stats.map((stat, index) => (
        <OutletManagerStatWithIconCard
          key={index}
          value={stat.value}
          title={stat.title}
          icon={stat.icon}
          iconBgColor={stat.iconBgColor}
          changeText={stat.changeText}
          changeColorClass={stat.changeColorClass}
          changeBgClass={stat.changeBgClass}
        />
      ))}
    </GridWrapper>
  );
};

export default OutletManagerStat;

export const Stats: OutletManagerStatWithIconCardProps[] = [
  {
    title: "Today's POs",
    value: 8,
    icon: <ShoppingCart className="w-5 h-5 text-blue-600" />,
    iconBgColor: "bg-blue-100",
    changeText: "+12%",
    changeColorClass: "text-green-600",
    changeBgClass: "bg-green-50",
  },
  {
    title: "Pending Approvals",
    value: 3,
    icon: <Clock className="w-5 h-5 text-orange-600" />,
    iconBgColor: "bg-orange-100",
    changeText: "Urgent",
    changeColorClass: "text-red-600",
    changeBgClass: "bg-red-100",
  },
  {
    title: "Last Stock Count",
    value: "98.5%",
    icon: <Clipboard className="w-5 h-5 text-purple-600" />,
    iconBgColor: "bg-purple-100",
    changeText: "2 days ago",
    changeColorClass: "text-purple-700",
    changeBgClass: "bg-purple-50",
  },
  {
    title: "Today's Waste",
    value: "$284",
    icon: <Trash2 className="w-5 h-5 text-red-600" />,
    iconBgColor: "bg-red-100",
    changeText: "-5%",
    changeColorClass: "text-yellow-600",
    changeBgClass: "bg-yellow-100",
  },
];
