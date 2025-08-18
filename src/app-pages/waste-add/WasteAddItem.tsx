"use client";
import WasteAddItemTable from "@/components/table/waste/WasteAddItemTable";
import { Button } from "@/components/ui/button";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useMemo, useState } from "react";

type WasteRow = {
  id: string;
  date: string;
  item_id: number | null;
  item_name: string;
  transfer_qty: number;
  uom: string;
  reason: string;
  description: string;
  unit_cost: number;
  total_cost: number;
};

const headtable = [
  "Date",
  "Item",
  "Quantity",
  "UOM",
  "Reason",
  "Description",
  "Unit Cost",
  "Total Cost",
  "Actions",
];

const makeRow = (): WasteRow => ({
  id: crypto.randomUUID(),
  date: "",
  item_id: null,
  item_name: "",
  transfer_qty: 0,
  uom: "",
  reason: "",
  description: "",
  unit_cost: 0,
  total_cost: 0,
});

const WasteAddItem = () => {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState<WasteRow[]>([makeRow()]);

  const totalItems = useMemo(() => rows.length, [rows]);

  const handleAddWasteItem = () => {
    setRows((prev) => [...prev, makeRow()]);
  };

  const handleUpdate = (id: string, patch: Partial<WasteRow>) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const next = { ...r, ...patch };
        const qty = Number(next.transfer_qty) || 0;
        const unit = Number(next.unit_cost) || 0;
        next.total_cost = Number((qty * unit).toFixed(2));
        return next;
      }),
    );
  };

  const handleDelete = (id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div>
      <div className="mb-4 flex  justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 capitalize">
          Waste Entry Table
        </h2>
        <Button
          variant="secondary"
          className="w-auto"
          onClick={handleAddWasteItem}
        >
          +Add Another Waste Item
        </Button>
      </div>

      <TableWrapper
        totalItems={totalItems}
        currentPage={page}
        itemsPerPage={10}
        onPageChange={(p) => setPage(p)}
      >
        <WasteAddItemTable
          headtable={headtable}
          wasteItem={rows}
          onChange={handleUpdate}
          onDelete={(itemId) => handleDelete(itemId)}
          loading={false}
        />
      </TableWrapper>
    </div>
  );
};

export default WasteAddItem;
