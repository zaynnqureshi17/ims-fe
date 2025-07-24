import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import OutletAddForm from "./OutletEditForm";
import OutletEditTopBar from "./OutletEditTopBar";

const OutletEdit = () => {
  return (
    <ProtectedLayoutWrapper topBar={<OutletEditTopBar />}>
      <PageHeader
        heading="Edit Outlet"
        description="Update Outlet information."
      />
      <OutletAddForm />
    </ProtectedLayoutWrapper>
  );
};

export default OutletEdit;
