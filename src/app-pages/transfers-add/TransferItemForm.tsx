"use client";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useMemo, useState } from "react";
import TransferItems from "./TransferItems";

const TransferItemForm = () => {
  const [page, setPage] = useState(1);

  const { totalItems, totalTransferCost } = useMemo(() => {
    const total = transferItems.reduce(
      (acc, item) => acc + item.transfer_qty * parseFloat(item.unit_cost),
      0,
    );
    return {
      totalItems: transferItems.length,
      totalTransferCost: total,
    };
  }, []);

  return (
    <TableWrapper
      totalItems={totalItems}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(p) => setPage(p)}
    >
      <TransferItems
        headtable={headtable}
        TransferItem={transferItems}
        loading={false}
      />

      <div className="w-full border-t">
        <div className="flex items-center justify-between p-4">
          <p className="font-semibold">Total Transfer Cost:</p>
          <p className="text-orange text-2xl font-bold">
            ${totalTransferCost.toFixed(2)}
          </p>
        </div>
      </div>
    </TableWrapper>
  );
};

export default TransferItemForm;

const transferItems = [
  {
    item_id: 1,
    item_name: "Select Item",
    current_stock: "0.00",
    transfer_qty: 0,
    unit_cost: "0.00",
    total_cost: "$0.00",
  },
  {
    item_id: 2,
    item_name: "Select Item",
    current_stock: "0.00",
    transfer_qty: 0,
    unit_cost: "0.00",
    total_cost: "$0.00",
  },
];

const headtable = [
  "Items",
  "Current Stock",
  "Transfer Qty",
  "Unit Cost(FIFO)",
  "Total Cost",
  "Action",
];
