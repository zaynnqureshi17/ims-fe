"use client";

import StockCountListTable from "@/components/table/stock-count/StockCountListTable";
import { Button } from "@/components/ui/button";
import { IStockItem } from "@/utils/types/stock.count.type";

const VarianceReviewTable = ({
  data,
  onApprove,
}: {
  data: IStockItem[] | [];
  onApprove: () => void;
}) => {
  const headtable = [
    "ID",
    "Item Name",
    "Category",
    "Storage",
    "Full Unit",
    "Loose Units",
    "After Packaging",
    "Unit Price",
  ];

  return (
    <div className="space-y-6">
      <StockCountListTable stockCount={data} headtable={headtable} />
      <div className="flex justify-end">
        <Button variant="secondary" className="w-fit" onClick={onApprove}>
          Approve Variance
        </Button>
      </div>
    </div>
  );
};

export default VarianceReviewTable;
