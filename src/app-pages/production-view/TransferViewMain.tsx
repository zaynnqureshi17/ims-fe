"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProductionInfo = {
  recipe: string;
  totalCost: number;
  quantity: number;
  producedBy: string;
  unitCost: number;
  dateTime: string;
};

type ProductionItemRow = {
  name: string;
  qty: number;
  cost: number;
};

const currency = (n: number) => `$${n.toFixed(2)}`;

const MetaItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col">
    <span className="text-xs text-muted-foreground">{label}</span>
    <span className="text-sm font-medium">{value}</span>
  </div>
);

const SummaryCard = ({ info }: { info: ProductionInfo }) => {
  return (
    <Card className="bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <MetaItem label="Recipe:" value={info.recipe} />
        <MetaItem label="Total Cost:" value={currency(info.totalCost)} />
        <MetaItem label="Quantity" value={`${info.quantity} units`} />
        <MetaItem label="Produced By:" value={info.producedBy} />
        <MetaItem label="Unit Cost" value={currency(info.unitCost)} />
        <MetaItem label="Date & Time:" value={info.dateTime} />
      </CardContent>
    </Card>
  );
};

const IngredientTable = ({
  rows,
  unitTotal,
}: {
  rows: ProductionItemRow[];
  unitTotal: number;
}) => {
  return (
    <Card className="bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Ingredient Cost Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-3 px-4 py-3 text-xs text-muted-foreground">
          <div>Item</div>
          <div className="text-center">Qty</div>
          <div className="text-right">Cost</div>
        </div>
        <div className="divide-y">
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-3 px-4 py-3 text-sm">
              <div className="font-medium">{r.name}</div>
              <div className="text-center">{r.qty}</div>
              <div className="text-right">{currency(r.cost)}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 px-4 py-3 border-t">
          <div className="font-semibold">Total</div>
          <div />
          <div className="text-right font-semibold">{currency(unitTotal)}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductionViewMain = () => {
  const production: ProductionInfo = {
    recipe: "Pizza Margherita",
    totalCost: 212.5,
    quantity: 25,
    producedBy: "John Smith",
    unitCost: 8.5,
    dateTime: "15/01/2024, 14:30:00",
  };

  const items: ProductionItemRow[] = [
    { name: "Dough Ball", qty: 25, cost: 3.0 },
    { name: "Tomato Sauce", qty: 25, cost: 1.2 },
    { name: "Mozzarella", qty: 25, cost: 3.7 },
    { name: "Basil & Oil", qty: 25, cost: 0.6 },
  ];

  const unitTotal = items.reduce((s, r) => s + r.cost, 0);

  return (
    <div className="col-span-2 space-y-4">
      <SummaryCard info={production} />
      <IngredientTable rows={items} unitTotal={unitTotal} />
    </div>
  );
};

export default ProductionViewMain;
