import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import ReportFilter from "./ReportFilter";
import ReportPageHeader from "./ReportPageHeader";
import ReportTopBar from "./ReportTopBar";

const Report = () => {
  return (
    <ProtectedLayoutWrapper topBar={<ReportTopBar />}>
      <ReportPageHeader />
      <ReportFilter />
    </ProtectedLayoutWrapper>
  );
};

export default Report;
