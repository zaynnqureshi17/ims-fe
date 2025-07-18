import PageHeader from "@/components/page-header";
import BrandManagerDashboardRecentActivities from "./BrandManagerDashboardRecentActivities";
import BrandManagerQuickAction from "./BrandManagerQuickAction";
import BrandManagerStat from "./BrandManagerStat";
import BrandManagerTopBar from "./BrandManagerTopBar";
import BrandMangerDashboardRevenuCosChart from "./BrandMangerDashboardRevenuCosChart";
import BrandManagerWastageStuff from "./BrandManagerWastageStuff";

const BrandManager = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrandManagerTopBar />
      <main className="px-6 py-3">
        <PageHeader
          heading="Brand Manager"
          description="System-wide overview and control center."
        />
        <BrandManagerStat />
        <BrandMangerDashboardRevenuCosChart />
        <BrandManagerWastageStuff />
        <BrandManagerQuickAction />
        <BrandManagerDashboardRecentActivities />
      </main>
    </div>
  );
};

export default BrandManager;
