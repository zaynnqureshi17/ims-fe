import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import OutletDetailView from "./OutletDetailView";
import OutletViewTab from "./OutletViewTab";
import OutletViewTopBar from "./OutletViewTopBar";

const OutletView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<OutletViewTopBar />}>
      <OutletDetailView />
      <OutletViewTab />
    </ProtectedLayoutWrapper>
  );
};

export default OutletView;
