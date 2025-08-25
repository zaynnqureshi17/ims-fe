"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { optionsType } from "@/utils/types/common.type";
import { useMemo, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import TransferItems from "./TransferItems";

const TransfersAddNew = ({ itemOptions }: { itemOptions: optionsType[] }) => {
  const { control, watch } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "transfer_items",
  });

  const handleAddItem = () => {
    append({
      item_id: "",
      transfer_qty: 0,
      uom: "",
      unit_cost: 0,
    });
  };

  const headtable = [
    "Item",
    "Transfer Qty",
    "UOM",
    "Unit Cost (FIFO)",
    "Total Cost",
    "Action",
  ];

  const [page, setPage] = useState(1);
  const transferItems = watch("transfer_items") || [];

  const { totalItems, totalTransferCost } = useMemo(() => {
    const total = transferItems.reduce(
      (acc: number, item: any) =>
        acc +
        (parseFloat(item?.transfer_qty) || 0) *
          (parseFloat(item?.unit_cost) || 0),
      0,
    );
    return {
      totalItems: transferItems.length,
      totalTransferCost: total,
    };
  }, [transferItems]);

  return (
    <>
      <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <PageHeader heading="Transfer Items" />
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
        totalItems={totalItems}
        currentPage={page}
        itemsPerPage={10}
        onPageChange={(p) => setPage(p)}
      >
        <TransferItems
          itemOptions={itemOptions}
          headtable={headtable}
          fields={fields} // ✅ fields properly pass
          control={control}
          onDelete={remove}
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
    </>
  );
};

export default TransfersAddNew;
