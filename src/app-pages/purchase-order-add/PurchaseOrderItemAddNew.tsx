"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { optionsType } from "@/utils/types/common.type";
import { useMemo, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import PurchaseOrderItem from "./PurchaseOrderItem";

const headtable = ["Item", "Quantity", "Unit Price", "Total", "Action"];

const PurchaseOrderItemAddNew = ({
  itemOptions,
}: {
  itemOptions: optionsType[];
}) => {
  const { control, watch } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "po_items",
  });

  const handleAddItem = () => {
    append({
      item_id: "",
      quantity: 0,
      unit_price: 0,
    });
  };

  const POItem = watch("po_items") || [];

  const [page, setPage] = useState(1);

  const { totalItems, subtotal, tax, totalAmount } = useMemo(() => {
    const subtotalCalc = POItem.reduce(
      (acc: number, item: any) =>
        acc + item.quantity * parseFloat(item.unit_price || 0),
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
    <>
      <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <PageHeader heading="PO Items" />
        <div className="flex justify-end items-end gap-3">
          <Button
            type="button"
            className="cursor-pointer"
            onClick={handleAddItem}
          >
            Add Item
          </Button>
        </div>
      </GridWrapper>

      <TableWrapper
        totalItems={POItem.length}
        currentPage={page}
        itemsPerPage={10}
        onPageChange={(page) => setPage(page)}
      >
        <PurchaseOrderItem
          itemOptions={itemOptions}
          headtable={headtable}
          POItem={POItem}
          remove={remove}
          loading={false}
        />

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
        <div className="flex flex-col items-center justify-center p-4">
          <p>Total Amount</p>
          <p className="text-orange text-2xl font-bold">
            ${totalAmount.toFixed(2)}
          </p>
        </div>
      </TableWrapper>
    </>
  );
};

export default PurchaseOrderItemAddNew;
