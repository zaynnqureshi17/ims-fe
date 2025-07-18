import AdminDasboardLabelWithStat from "@/components/statistic/admin-dashboard/AdminDasboardStatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { Boxes, Building2, Store, Users } from "lucide-react";

const AdminDashboardStat = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <AdminDasboardLabelWithStat
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

export default AdminDashboardStat;

const stats = [
  {
    title: "Total Users",
    value: 230,
    shortDetails: "+12% from last month",
    icon: <Users className="w-5 h-5" />,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-900",
    shortTextColor: "text-green-700",
  },
  {
    title: "Active Brands",
    value: 18,
    shortDetails: "+ new brands",
    icon: <Building2 className="w-5 h-5" />,
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-700",
    shortTextColor: "text-green-700",
  },
  {
    title: "Total Outlets",
    value: 64,
    shortDetails: "5 new this week",
    icon: <Store className="w-5 h-5" />,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Total Items",
    value: 3247,
    shortDetails: "+156 this month",
    icon: <Boxes className="w-5 h-5" />,
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-700",
    shortTextColor: "text-green-700",
  },
];
