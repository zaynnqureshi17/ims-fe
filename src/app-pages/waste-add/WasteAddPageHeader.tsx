import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const WasteAddPageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Add Waste Record"
        description="Fill in the details below to create a new waste record."
      />
    </GridWrapper>
  );
};

export default memo(WasteAddPageHeader);
