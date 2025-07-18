import GridWrapper from "@/components/wrapper/GridWrapper";
import AdminDashboardChart from "./AdminDashboardChart";
import AdminDashboardOverview from "./AdminDashboardOverview";

const AdminDashboardOverViewChart = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <AdminDashboardOverview />
      <AdminDashboardChart />
    </GridWrapper>
  );
};

export default AdminDashboardOverViewChart;
