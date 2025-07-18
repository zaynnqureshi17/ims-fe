import FinanceManagerRecentPurchaseTable, {
  RecentPurchaseProps,
} from "@/components/table/finance-manager/FinanceManagerRecentPurchaseTable";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const FinanceManagerRecentPurchase = () => {
  return (
    <SectionWrapper title="Recent Purchases" lineDrawn={false}>
      <FinanceManagerRecentPurchaseTable
        headtable={headTable}
        recentPurchases={recentPurchase}
      />
    </SectionWrapper>
  );
};

export default FinanceManagerRecentPurchase;

const headTable: string[] = ["Date", "Supplier", "Amount", "Status"];
const recentPurchase: RecentPurchaseProps[] = [
  {
    date: "2023-10-01",
    supplier: "Supplier A",
    amount: 100,
    status: "Paid",
  },
  {
    date: "2023-10-02",
    supplier: "Supplier B",
    amount: 200,
    status: "Pending",
  },
  {
    date: "2023-10-03",
    supplier: "Supplier C",
    amount: 300,
    status: "Failed",
  },
];
