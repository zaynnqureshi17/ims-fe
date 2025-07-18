import AdminDashboardLinerChart from "@/components/rechart/admin-dashboard/AdminDashboardLinerChart";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const AdminDashboardChart = () => {
  return (
    <SectionWrapper title="System Activity">
      <AdminDashboardLinerChart />
    </SectionWrapper>
  );
};

export default AdminDashboardChart;
