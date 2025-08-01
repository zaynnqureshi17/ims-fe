import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import SupplierViewActivity from "./SupplierViewActivity";
import SupplierViewHeader from "./SupplierViewHeader";
import SupplierViewMain from "./SupplierViewMain";
import SupplierViewTopBar from "./SupplierViewTopBar";

const SupplierView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<SupplierViewTopBar />}>
      <SupplierViewHeader />
      <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SupplierViewMain />
        <SupplierViewActivity />
      </GridWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default SupplierView;
