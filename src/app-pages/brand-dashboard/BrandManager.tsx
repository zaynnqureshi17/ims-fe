import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import BrandManagerDashboardRecentActivities from "./BrandManagerDashboardRecentActivities";
import BrandManagerQuickAction from "./BrandManagerQuickAction";
import BrandManagerStat from "./BrandManagerStat";
import BrandManagerTopBar from "./BrandManagerTopBar";
import BrandManagerWastageStuff from "./BrandManagerWastageStuff";
import BrandMangerDashboardRevenuCosChart from "./BrandMangerDashboardRevenuCosChart";

const BrandManager = () => {
  return (
    <ProtectedLayoutWrapper topBar={<BrandManagerTopBar />}>
      <PageHeader
        heading="Brand Manager"
        description="System-wide overview and control center."
      />
      <BrandManagerStat />
      <BrandMangerDashboardRevenuCosChart />
      <BrandManagerWastageStuff />
      <BrandManagerQuickAction />
      <BrandManagerDashboardRecentActivities />
    </ProtectedLayoutWrapper>
  );
};

export default BrandManager;
