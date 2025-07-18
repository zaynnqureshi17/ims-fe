import BrandManagerStatWithIconCard, { BrandManagerStatWithIconCardProps } from "@/components/statistic/brand-manager/BrandManagerStatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { DollarSign, Repeat, ShoppingBag, Store } from "lucide-react";

const BrandManagerStat = () => (
  <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {brandManagerStats.map((stat, i) => (
      <BrandManagerStatWithIconCard key={i} {...stat} />
    ))}
  </GridWrapper>
);

export default BrandManagerStat;
export const brandManagerStats: BrandManagerStatWithIconCardProps[] = [
  {
    title: "Top Performing Outlet",
    value: "Downtown Cafe",
    icon: <Store className="w-5 h-5" />,
    details: "+12.5% vs last month",
    subText: "Revenue: $45,230",
    iconBgClass: "bg-gray-100",
    iconClass: "text-gray-600",
    detailsClass: "text-green-500",
    subTextClass: "text-gray-500",
  },
  {
    title: "Overall COGS",
    value: "32.4%",
    icon: <DollarSign className="w-5 h-5" />,
    details: "+2.1% vs target",
    subText: "Target: 30.3%",
    iconBgClass: "bg-yellow-100",
    iconClass: "text-yellow-600",
    detailsClass: "text-red-500",
    subTextClass: "text-gray-500",
  },
  {
    title: "Monthly Purchases",
    value: "$28,450",
    icon: <ShoppingBag className="w-5 h-5" />,
    details: "-5.2% vs last month",
    subText: "142 orders processed",
    iconBgClass: "bg-green-100",
    iconClass: "text-green-600",
    detailsClass: "text-green-500",
    subTextClass: "text-gray-500",
  },
  {
    title: "Transfer Stats",
    value: 24,
    icon: <Repeat className="w-5 h-5" />,
    details: "8 pending approval",
    subText: "This month",
    iconBgClass: "bg-indigo-100",
    iconClass: "text-indigo-600",
    detailsClass: "text-blue-500",
    subTextClass: "text-gray-500",
  },
];