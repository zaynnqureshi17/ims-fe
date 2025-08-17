import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import GridWrapper from "@/components/wrapper/GridWrapper";
import SalesReportTopBar from "./SalesReportTopBar";
import SalesReportViewActivity from "./SalesReportViewActivity";
import SalesReportViewMain from "./SalesReportViewMain";
import SalesReportPageHeader from "./SalesReportViewPageHeader";

const SalesReportView = () => {
  return (
    <ProtectedLayoutWrapper topBar={<SalesReportTopBar />}>
      <SalesReportPageHeader />
      <GridWrapper className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SalesReportViewMain />
        <SalesReportViewActivity />
      </GridWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default SalesReportView;
