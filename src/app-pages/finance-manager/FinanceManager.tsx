import PageHeader from "@/components/page-header";
import FinanceManagerMontlySummaryData from "./FinanceManagerMontlySummaryData";
import FinanceManagerRecentTop from "./FinanceManagerRecentTop";
import FinanceManagerSalesVarianceChart from "./FinanceManagerSalesVarianceChart";
import FinanceManagerStat from "./FinanceManagerStat";
import FinanceManagerTopBar from "./FinanceManagerTopBar";
import FinanceFilter from "./FinanceFilter";

const FinanceManager = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <FinanceManagerTopBar />
      <main className="px-6 py-3">
        <PageHeader
          heading="Finance Manager"
          description="Monitor financial metrics and purchase analytics."
        />
        <FinanceFilter/>
        <FinanceManagerMontlySummaryData />
        <FinanceManagerStat />
        <FinanceManagerSalesVarianceChart />
        <FinanceManagerRecentTop />
      </main>
    </div>
  );
};

export default FinanceManager;
