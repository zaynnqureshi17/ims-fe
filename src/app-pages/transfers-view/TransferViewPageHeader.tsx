import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const TransferViewPageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <PageHeader
        heading="Transfer Detail"
        description="Manage transfer details"
      />
    </GridWrapper>
  );
};

export default memo(TransferViewPageHeader);
