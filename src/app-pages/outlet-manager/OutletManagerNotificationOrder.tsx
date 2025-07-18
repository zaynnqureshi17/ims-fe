import GridWrapper from "@/components/wrapper/GridWrapper";
import OutletManagerTodayActivities from "./OutletManagerTodayActivities";
import OutletManagerNotification from "./OutletManagerNotification";

const OutletManagerNotificationOrder = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <OutletManagerTodayActivities />
      <OutletManagerNotification />
    </GridWrapper>
  );
};

export default OutletManagerNotificationOrder;
