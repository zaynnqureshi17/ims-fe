import StuffStatWithIconCard, { StuffStatWithIconCardProps } from "@/components/statistic/Stuff/StuffStatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { ClipboardCheck, ClipboardList, Trash2, Utensils } from "lucide-react";

const StuffStat = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StuffStatWithIconCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          iconBgColor={stat.iconBgColor}
          iconColor={stat.iconColor}
          changeText={stat.changeText}
          changeColorClass={stat.changeColorClass}
          changeBgClass={stat.changeBgClass}
        />
      ))}
    </GridWrapper>
  );
};

export default StuffStat;

const stats: StuffStatWithIconCardProps[] = [
  {
    title: "Pending Stock Count",
    value: 12,
    changeText: "Urgent",
    changeColorClass: "text-red-600",
    changeBgClass: "bg-red-100",
    icon: <ClipboardList className="w-5 h-5" />,
    iconBgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Meals Logged Today",
    value: 47,
    changeText: "On Track",
    changeColorClass: "text-green-700",
    changeBgClass: "bg-green-100",
    icon: <Utensils className="w-5 h-5" />,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Assigned Orders",
    value: 8,
    changeText: "In Progress",
    changeColorClass: "text-yellow-700",
    changeBgClass: "bg-yellow-100",
    icon: <ClipboardCheck className="w-5 h-5" />,
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Waste Logged",
    value: 3,
    changeText: "Normal",
    changeColorClass: "text-purple-700",
    changeBgClass: "bg-purple-100",
    icon: <Trash2 className="w-5 h-5" />,
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];
