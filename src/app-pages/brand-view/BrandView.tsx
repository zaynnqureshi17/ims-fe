import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import BrandDetailView from "./BrandDetailView";
import BrandViewFilter from "./BrandViewFilter";
import BrandViewTable from "./BrandViewTable";
import BrandViewTopBar from "./BrandViewTopBar";

const BrandView = ({ id }: { id: string }) => {
  return (
    <ProtectedLayoutWrapper topBar={<BrandViewTopBar />}>
      <BrandDetailView />
      <BrandViewFilter id={id} />
      <BrandViewTable />
    </ProtectedLayoutWrapper>
  );
};

export default BrandView;
