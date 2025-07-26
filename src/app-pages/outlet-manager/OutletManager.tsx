import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import OutletFilter from "./OutletFilter";
import OutletManagerNotificationOrder from "./OutletManagerNotificationOrder";
import OutletManagerStat from "./OutletManagerStat";
import OutletManagerStuffMealWaste from "./OutletManagerStuffMealWaste";
import OutletManagerTopBar from "./OutletManagerTopBar";

const OutletManager = () => {
  return (
    <ProtectedLayoutWrapper topBar={<OutletManagerTopBar />}>
      <OutletFilter />
      <OutletManagerStat />
      <OutletManagerNotificationOrder />
      <OutletManagerStuffMealWaste />
    </ProtectedLayoutWrapper>
  );
};

export default OutletManager;
