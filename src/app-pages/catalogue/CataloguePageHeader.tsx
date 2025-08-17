import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const CataloguePageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Catalogue for Ordering"
        description="Manage Suppliers"
      />
    </GridWrapper>
  );
};

export default memo(CataloguePageHeader);
