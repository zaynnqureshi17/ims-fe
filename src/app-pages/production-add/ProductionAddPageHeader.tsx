import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const ProductionAddPageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Add New Production"
        description="Fill in the details below to create a new production."
      />
    </GridWrapper>
  );
};

export default memo(ProductionAddPageHeader);
