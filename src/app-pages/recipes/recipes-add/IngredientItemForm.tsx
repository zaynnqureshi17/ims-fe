"use client";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useMemo, useState } from "react";
import PurchaseOrderItem from "./PurchaseOrderItem";

const IngredientItemForm = () => {
  const [page, setPage] = useState(1);

  const { totalItems, totalRecipeCost } = useMemo(() => {
    const total = POItem.reduce(
      (acc, item) => acc + item.quantity * parseFloat(item.cost_per_unit),
      0,
    );
    return {
      totalItems: POItem.length,
      totalRecipeCost: total,
    };
  }, [POItem]);

  return (
    <TableWrapper
      totalItems={POItem.length}
      currentPage={page}
      itemsPerPage={10}
      onPageChange={(page) => setPage(page)}
    >
      <PurchaseOrderItem
        headtable={headtable}
        POItem={POItem}
        loading={false}
      />

      <div className="w-full border-t">
        <div className="flex items-center justify-between p-4">
          <div>
            <p className="font-semibold">Total Recipe Cost</p>
            <p className="text-sm text-muted-foreground">
              Enable this recipe for production batching
            </p>
          </div>
          <div className="text-right">
            <p className="text-orange text-2xl font-bold">
              ${totalRecipeCost.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground">
              ${totalRecipeCost.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </TableWrapper>
  );
};

export default IngredientItemForm;

const POItem = [
  {
    item_id: 1,
    ingredient_name: "Select Ingredient",
    quantity: 0,
    uom: "Kg",
    yield_percent: "0.00",
    cost_per_unit: "0.00",
    total_cost: "$0.00",
  },
  {
    item_id: 2,
    ingredient_name: "Select Ingredient",
    quantity: 0,
    uom: "Kg",
    yield_percent: "0.00",
    cost_per_unit: "0.00",
    total_cost: "$0.00",
  },
];

const headtable = [
  "Ingredient",
  "Quantity",
  "UOM",
  "Yield %",
  "Cost/Unit",
  "Total Cost",
  "Action",
];
