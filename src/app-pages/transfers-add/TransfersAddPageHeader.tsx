import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const TransfersAddPageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Add New Transfer"
        description="Fill in the details below to create a new transfer."
      />
    </GridWrapper>
  );
};

export default memo(TransfersAddPageHeader);
