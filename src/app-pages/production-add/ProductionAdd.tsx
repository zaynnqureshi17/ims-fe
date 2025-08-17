import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import ProductionAddForm from "./ProductionAddForm";
import ProductionAddPageHeader from "./ProductionAddPageHeader";
import ProductionField from "./ProductionField";
import ProductionNotes from "./ProductionNotes";
import ProductionAddTopBar from "./ProductionAddTopBar";

const ProductionAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<ProductionAddTopBar />}>
      <ProductionAddPageHeader />
      <ProductionAddForm>
        <ProductionField />
        <ProductionNotes />
      </ProductionAddForm>
    </ProtectedLayoutWrapper>
  );
};

export default ProductionAdd;
