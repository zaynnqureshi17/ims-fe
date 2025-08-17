"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TransferInfo = {
  transferId: string;
  subtitle?: string;
  status: "Pending" | "Completed" | "Cancelled";
  date: string;
  from: string;
  to: string;
  reason: string;
  doNumber: string;
  invoiceNo: string;
  notes?: string;
};

type TransferItemRow = {
  name: string;
  currentStock: number;
  qty: number;
  uom: string;
  unitCost: number;
};

const currency = (n: number) => `$${n.toFixed(2)}`;

const MetaItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col">
    <span className="text-xs text-muted-foreground">{label}</span>
    <span className="text-sm font-medium">{value}</span>
  </div>
);

const TransferItemsTable = ({ rows }: { rows: TransferItemRow[] }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="px-4 py-3 font-semibold">Transfer Items</div>
      <div className="border-t">
        <div className="grid grid-cols-6 px-4 py-2 text-xs text-muted-foreground">
          <div>Items</div>
          <div className="text-right">Current Stock</div>
          <div className="text-right">Qty</div>
          <div className="text-right">UOM</div>
          <div className="text-right">Unit Cost (FIFO)</div>
          <div className="text-right">Total Cost</div>
        </div>
        <div className="divide-y">
          {rows.map((r, i) => {
            const total = r.qty * r.unitCost;
            return (
              <div key={i} className="grid grid-cols-6 px-4 py-3 text-sm">
                <div className="font-medium">{r.name}</div>
                <div className="text-right">{currency(r.currentStock)}</div>
                <div className="text-right">{r.qty}</div>
                <div className="text-right">{r.uom}</div>
                <div className="text-right">{currency(r.unitCost)}</div>
                <div className="text-right font-semibold">
                  {currency(total)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const TransferHeaderCard = ({
  info,
  itemsCount,
  totalCost,
}: {
  info: TransferInfo;
  itemsCount: number;
  totalCost: number;
}) => {
  return (
    <CardContent className="space-y-4 p-0">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="text-xl font-semibold leading-tight">
            {info.transferId}
          </div>
          {info.subtitle ? (
            <div className="text-sm text-muted-foreground">{info.subtitle}</div>
          ) : null}
        </div>
        <Badge variant="secondary" className="px-3 py-1 text-xs">
          {info.status}
        </Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <MetaItem label="Date" value={info.date} />
        <MetaItem label="From" value={info.from} />
        <MetaItem label="To" value={info.to} />
        <MetaItem label="Reason" value={info.reason} />
        <MetaItem label="DO Number" value={info.doNumber} />
        <MetaItem label="Invoice No" value={info.invoiceNo} />
        <MetaItem label="Items" value={String(itemsCount)} />
        <MetaItem label="Total Cost" value={currency(totalCost)} />
      </div>
    </CardContent>
  );
};

const TransferViewMain = () => {
  const transfer: TransferInfo = {
    transferId: "TRF-2024-001",
    subtitle: "Inventory transfer between locations",
    status: "Pending",
    date: "2024-01-15",
    from: "Main Kitchen",
    to: "Bar Station",
    reason: "Stock Replenishment",
    doNumber: "DO-88421",
    invoiceNo: "INV-11203",
    notes: "Deliver to cold storage upon arrival.",
  };

  const items: TransferItemRow[] = [
    {
      name: "Chicken Breast (kg)",
      currentStock: 0,
      qty: 5,
      uom: "Kg",
      unitCost: 12.5,
    },
    {
      name: "Chicken Breast (kg)",
      currentStock: 0,
      qty: 5,
      uom: "Kg",
      unitCost: 12.5,
    },
  ];

  const totalTransferCost = items.reduce(
    (sum, r) => sum + r.qty * r.unitCost,
    0,
  );

  return (
    <div className="col-span-2 space-y-4">
      <div className="space-y-4">
        <CardContent className="p-4 space-y-4 border bg-white rounded-md">
          <TransferHeaderCard
            info={transfer}
            itemsCount={items.length}
            totalCost={totalTransferCost}
          />
          <TransferItemsTable rows={items} />
          <div className="flex items-center justify-between border-t px-4 pt-4">
            <span className="text-sm font-semibold">Total Transfer Cost</span>
            <span className="text-2xl font-bold text-orange">
              {currency(totalTransferCost)}
            </span>
          </div>
        </CardContent>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Additional Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {transfer.notes || "-"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransferViewMain;
