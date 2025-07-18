import FinanceManagerVarianceBarChart from "@/components/rechart/finance-manager/FinanceManagerVarianceBarChart";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const FinanceManagerVarianceCostSummary = () => {
  return (
    <SectionWrapper title="Variance Cost Summary" lineDrawn={false}>
      <FinanceManagerVarianceBarChart />
    </SectionWrapper>
  );
};

export default FinanceManagerVarianceCostSummary;
