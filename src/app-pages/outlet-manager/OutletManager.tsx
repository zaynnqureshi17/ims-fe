import PageHeader from "@/components/page-header";
import OutletManagerNotificationOrder from "./OutletManagerNotificationOrder";
import OutletManagerStat from "./OutletManagerStat";
import OutletManagerStuffMealWaste from "./OutletManagerStuffMealWaste";
import OutletManagerTopBar from "./OutletManagerTopBar";

const OutletManager = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <OutletManagerTopBar />
      <main className="px-6 py-3">
        <PageHeader
          heading="Outlet Manager"
          description="Overview of Downtown Outlet Activity."
        />
        <OutletManagerStat />
        <OutletManagerNotificationOrder />
        <OutletManagerStuffMealWaste />
      </main>
    </div>
  );
};

export default OutletManager;
