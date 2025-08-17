import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { memo } from "react";

const SalesReportViewPageHeader = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Sales Details"
        description="Manage your restaurant sales details and their configurations."
      />
    </GridWrapper>
  );
};

export default memo(SalesReportViewPageHeader);
