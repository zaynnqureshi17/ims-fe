import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import OutletAddForm from "./OutletAddForm";
import OutletAddTopBar from "./OutletAddTopBar";

const OutletAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<OutletAddTopBar />}>
      <PageHeader
        heading="Add New Outlet"
        description="Enter New Outlet information."
      />
      <OutletAddForm />
    </ProtectedLayoutWrapper>
  );
};

export default OutletAdd;
