import AdminDasboardLabelWithStat from "@/components/statistic/admin-dashboard/AdminDasboardStatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { baseAdminDashboardIconPath } from "@/utils/PublicImageBaseUrl";

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
    icon: `${baseAdminDashboardIconPath}total-users.svg`,
    shortTextColor: "text-green-700",
  },
  {
    title: "Active Brands",
    value: 18,
    shortDetails: "+ new brands",
    icon: `${baseAdminDashboardIconPath}active-brands.svg`,
    shortTextColor: "text-green-700",
  },
  {
    title: "Total Outlets",
    value: 64,
    shortDetails: "5 new this week",
    icon: `${baseAdminDashboardIconPath}total-outlets.svg`,
  },
  {
    title: "Total Items",
    value: 3247,
    shortDetails: "+156 this month",
    icon: `${baseAdminDashboardIconPath}total-items.svg`,
    shortTextColor: "text-green-700",
  },
];
