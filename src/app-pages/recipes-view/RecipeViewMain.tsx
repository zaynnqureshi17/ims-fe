"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type RecipeInfo = {
  title: string;
  subtitle?: string;
  tag: string;
  version: string;
  subCategory: string;
  startDate: string;
};

type IngredientRow = {
  name: string;
  quantity: number;
  uom: string;
  yieldPct: number;
  costPerUnit: number;
};

type CostRates = {
  overheadPct: number;
  wastePct: number;
};

const currency = (n: number) => `$${n.toFixed(2)}`;

const MetaItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col">
    <span className="text-xs text-muted-foreground">{label}</span>
    <span className="text-sm font-medium">{value}</span>
  </div>
);

const IngredientsTable = ({ rows }: { rows: IngredientRow[] }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="px-4 py-3 font-semibold">Ingredients</div>
      <div className="border-t">
        <div className="grid grid-cols-6 px-4 py-2 text-xs text-muted-foreground">
          <div>Ingredient</div>
          <div className="text-right">Quantity</div>
          <div className="text-right">UOM</div>
          <div className="text-right">Yield %</div>
          <div className="text-right">Cost/Unit</div>
          <div className="text-right">Total Cost</div>
        </div>
        <div className="divide-y">
          {rows.map((r, i) => {
            const total = r.quantity * r.costPerUnit * (r.yieldPct / 100);
            return (
              <div key={i} className="grid grid-cols-6 px-4 py-3 text-sm">
                <div className="font-medium">{r.name}</div>
                <div className="text-right">{r.quantity}</div>
                <div className="text-right">{r.uom}</div>
                <div className="text-right">{`${r.yieldPct}%`}</div>
                <div className="text-right">{currency(r.costPerUnit)}</div>
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

const CostBreakdown = ({ base, rates }: { base: number; rates: CostRates }) => {
  const overhead = base * (rates.overheadPct / 100);
  const waste = base * (rates.wastePct / 100);
  const total = base + overhead + waste;

  const Box = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Cost Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Box label="Base Ingredients" value={currency(base)} />
          <Box
            label={`Overhead (${rates.overheadPct}%)`}
            value={currency(overhead)}
          />
          <Box label={`Waste (${rates.wastePct}%)`} value={currency(waste)} />
          <Box label="Total Cost" value={currency(total)} />
        </div>
      </CardContent>
    </Card>
  );
};

const RecipeHeaderCard = ({
  info,
  ingredientsCount,
  baseCost,
}: {
  info: RecipeInfo;
  ingredientsCount: number;
  baseCost: number;
}) => {
  return (
    <CardContent className="space-y-4 p-0">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="text-xl font-semibold leading-tight">
            {info.title}
          </div>
          {info.subtitle ? (
            <div className="text-sm text-muted-foreground">{info.subtitle}</div>
          ) : null}
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            {info.tag}
          </Badge>
          <span className="text-sm text-muted-foreground">{info.version}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <MetaItem label="Sub-category" value={info.subCategory} />
        <MetaItem label="Start Date" value={info.startDate} />
        <MetaItem label="Ingredients Count" value={String(ingredientsCount)} />
        <MetaItem label="Total cost" value={currency(baseCost)} />
      </div>
    </CardContent>
  );
};

const RecipeViewMain = () => {
  const recipe: RecipeInfo = {
    title: "Grilled Salmon",
    subtitle: "With lemon herb sauce",
    tag: "Main Course",
    version: "v2.1",
    subCategory: "Seafood",
    startDate: "2024-01-15",
  };

  const ingredients: IngredientRow[] = [
    {
      name: "Salmon Fillet",
      quantity: 1.2,
      uom: "Kg",
      yieldPct: 100,
      costPerUnit: 12.5,
    },
    {
      name: "Olive Oil",
      quantity: 0.05,
      uom: "L",
      yieldPct: 100,
      costPerUnit: 6.9,
    },
    {
      name: "Fresh Lemon",
      quantity: 0.2,
      uom: "Kg",
      yieldPct: 90,
      costPerUnit: 2.1,
    },
    {
      name: "Butter",
      quantity: 0.15,
      uom: "Kg",
      yieldPct: 80,
      costPerUnit: 4.2,
    },
    {
      name: "Parsley",
      quantity: 0.03,
      uom: "Kg",
      yieldPct: 70,
      costPerUnit: 1.45,
    },
  ];

  const baseIngredientsCost = ingredients.reduce(
    (sum, r) => sum + r.quantity * r.costPerUnit * (r.yieldPct / 100),
    0,
  );

  const rates: CostRates = { overheadPct: 10, wastePct: 2 };

  return (
    <div className="col-span-2 space-y-4">
      <div className="space-y-4">
        <CardContent className="p-4 space-y-4 border bg-white rounded-md">
          <RecipeHeaderCard
            info={recipe}
            ingredientsCount={ingredients.length}
            baseCost={baseIngredientsCost}
          />

          <IngredientsTable rows={ingredients} />
          <div className="flex flex-col justify-end items-end">
            <span className="text-sm text-muted-foreground">
              Total Recipe Cost
            </span>
            <span className="text-lg font-semibold">
              {currency(baseIngredientsCost)}
            </span>
          </div>
        </CardContent>
        <CostBreakdown base={baseIngredientsCost} rates={rates} />
      </div>
    </div>
  );
};

export default RecipeViewMain;
