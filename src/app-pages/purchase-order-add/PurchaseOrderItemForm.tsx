"use client";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useMemo, useState } from "react";
import PurchaseOrderItem from "./PurchaseOrderItem";

const PurchaseOrderItemForm = () => {
  const [page, setPage] = useState(1);

  // 👉 Calculate totals
  const { totalItems, subtotal, tax, totalAmount } = useMemo(() => {
    const subtotalCalc = POItem.reduce(
      (acc, item) => acc + item.quantity * parseFloat(item.unit_price),
      0,
    );
    const taxCalc = subtotalCalc * 0.1;
    return {
      totalItems: POItem.length,
      subtotal: subtotalCalc,
      tax: taxCalc,
      totalAmount: subtotalCalc + taxCalc,
    };
  }, [POItem]);

  return (
    <TableWrapper
      totalItems={POItem.length}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(page) => setPage(page)}
    >
      {/* Table Data */}
      <PurchaseOrderItem
        headtable={headtable}
        POItem={POItem}
        loading={false}
      />

      {/* Totals Section */}
      <div className="w-full border-t p-4 flex justify-around gap-2 border">
        <div className="flex flex-col justify-between">
          <p className="font-medium">Total Items</p>
          <p className="font-bold text-center">{totalItems}</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-medium">Subtotal</p>
          <p className="font-bold text-2xl">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-medium">Tax (10%)</p>
          <p className="font-bold">${tax.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center  justify-center  p-4">
        <p>Total Amount</p>
        <p className="text-orange text-2xl font-bold">
          ${totalAmount.toFixed(2)}
        </p>
      </div>
    </TableWrapper>
  );
};

export default PurchaseOrderItemForm;

const POItem = [
  {
    item_id: 1,
    unit: "KG",
    quantity: 10,
    item_name: "Chicken Farm",
    total: "250.00$",
    unit_price: "25.00",
  },
  {
    item_id: 2,
    item_name: "Beef Farm",
    unit: "KG",
    quantity: 10,
    total: "245.00$",
    unit_price: "24.50",
  },
];

const headtable = ["Item", "Unit", "Quantity", "Unit Price", "Total", "Action"];
