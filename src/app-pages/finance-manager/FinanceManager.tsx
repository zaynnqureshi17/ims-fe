import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import FinanceFilter from "./FinanceFilter";
import FinanceManagerMontlySummaryData from "./FinanceManagerMontlySummaryData";
import FinanceManagerRecentTop from "./FinanceManagerRecentTop";
import FinanceManagerSalesVarianceChart from "./FinanceManagerSalesVarianceChart";
import FinanceManagerStat from "./FinanceManagerStat";
import FinanceManagerTopBar from "./FinanceManagerTopBar";

const FinanceManager = () => {
  return (
    <ProtectedLayoutWrapper topBar={<FinanceManagerTopBar />}>
      <PageHeader
        heading="Finance Manager"
        description="Monitor financial metrics and purchase analytics."
      />
      <FinanceFilter />
      <FinanceManagerMontlySummaryData />
      <FinanceManagerStat />
      <FinanceManagerSalesVarianceChart />
      <FinanceManagerRecentTop />
    </ProtectedLayoutWrapper>
  );
};

export default FinanceManager;
