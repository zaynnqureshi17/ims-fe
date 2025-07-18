import GridWrapper from "@/components/wrapper/GridWrapper";
import FinanceManagerRecentPurchase from "./FinanceManagerRecentPurchase";
import FinanceManagerTopSpendingCategories from "./FinanceManagerTopSpendingCategories";

const FinanceManagerRecentTop = () => {
  return (
    <GridWrapper className="gap-4 grid grid-cols-1 md:grid-cols-2 ">
      <FinanceManagerRecentPurchase />
      <FinanceManagerTopSpendingCategories />
    </GridWrapper>
  );
};

export default FinanceManagerRecentTop;
