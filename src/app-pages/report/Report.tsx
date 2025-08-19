import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import ReportFilter from "./ReportFilter";
import ReportMontlySummaryData from "./ReportMontlySummaryData";
import ReportPageHeader from "./ReportPageHeader";
import ReportPromotion from "./ReportPromotion";
import ReportPurchaseReport from "./ReportPuchaseReport";
import ReportPurchaseAnalytics from "./ReportPurchaseAnalytics";
import ReportSalesInsight from "./ReportSalesInsight";
import ReportStat from "./ReportStat";
import ReportTopBar from "./ReportTopBar";
import { Suspense } from "react";

const Report = () => {
  return (
    <ProtectedLayoutWrapper topBar={<ReportTopBar />}>
      <ReportPageHeader />
      <Suspense fallback={<div>Loading filters...</div>}>
        <ReportFilter />
      </Suspense>
      <ReportMontlySummaryData />
      <ReportStat />
      <ReportPurchaseAnalytics />
      <ReportSalesInsight />
      <ReportPromotion />
      <ReportPurchaseReport />
    </ProtectedLayoutWrapper>
  );
};

export default Report;
