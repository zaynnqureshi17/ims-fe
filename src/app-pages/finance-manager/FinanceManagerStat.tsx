import FinanceManagerStatWithIconCard from "@/components/statistic/finance-manager/FinanceManagerStatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { ShoppingCart, DollarSign, TrendingUp, Calendar } from "lucide-react";

const FinanceManagerStat = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {stats.map((stat, index) => (
        <FinanceManagerStatWithIconCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          shortDetails={stat.shortDetails}
          iconBgColor={stat.iconBgColor}
          iconColor={stat.iconColor}
          shortTextColor={stat.shortTextColor}
        />
      ))}
    </GridWrapper>
  );
};

export default FinanceManagerStat;

const stats = [
  {
    title: "Daily Purchase",
    value: "$12,450",
    shortDetails: "+5.2% from yesterday",
    icon: <ShoppingCart className="w-5 h-5" />,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-900",
    shortTextColor: "text-green-700",
  },
  {
    title: "Cash Purchase Volume",
    value: "$8,920",
    shortDetails: "-2.1% from yesterday",
    icon: <DollarSign className="w-5 h-5" />,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-700",
    shortTextColor: "text-red-600",
  },
  {
    title: "Variance Cost",
    value: "$1,230",
    shortDetails: "+12.5% variance",
    icon: <TrendingUp className="w-5 h-5" />,
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    shortTextColor: "text-yellow-700",
  },
  {
    title: "Total Orders",
    value: "156",
    shortDetails: "+8.3% from yesterday",
    icon: <Calendar className="w-5 h-5" />,
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-700",
    shortTextColor: "text-green-700",
  },
];
