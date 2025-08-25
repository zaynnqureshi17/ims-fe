"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetItem } from "@/queries/item/useGetItem.query";
import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import RecipeIngredientsItem from "./RecipeIngredientsItem";

const headtable = [
  "Ingredient",
  "Quantity",
  "UOM",
  "Yield %",
  "Cost/Unit",
  "Total Cost",
  "Action",
];

const RecipesAddNew = () => {
  const { data: items, status, error } = useGetItem({});

  const { itemOptions } = useMultiOptions({
    items: items?.body?.data,
  });
  const { control, watch } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const handleAddNew = () => {
    append({
      item_id: null,
      quantity_used: 0,
      ingredient_base_uom: "kg",
      yield_percentage: 100,
      unit_price: 0,
    });
  };

  const [page, setPage] = useState(1);

  const ingredients = watch("ingredients") || [];

  const totalRecipeCost = ingredients.reduce((acc: number, item: any) => {
    const qty = Number(item?.quantity_used) || 0;
    const price = Number(item?.unit_price) || 0;
    const yieldPct = (Number(item?.yield_percentage) || 100) / 100;
    return acc + qty * price * yieldPct;
  }, 0);

  return (
    <div>
      <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
        <PageHeader heading="Ingredient" />
        <div className="flex justify-end items-end gap-3">
          <Button
            variant="secondary"
            className="w-auto"
            type="button"
            onClick={handleAddNew}
          >
            Add New
          </Button>
        </div>
      </GridWrapper>

      <TableWrapper
        totalItems={ingredients.length}
        currentPage={page}
        itemsPerPage={10}
        onPageChange={(page) => setPage(page)}
      >
        <RecipeIngredientsItem
          headtable={headtable}
          fields={fields}
          control={control}
          itemOptions={itemOptions}
          onDelete={remove}
        />

        <div className="w-full border-t">
          <div className="flex items-center justify-between p-4">
            <div>
              <p className="font-semibold">Total Recipe Cost</p>
              <p className="text-sm text-muted-foreground">
                Sum of all ingredients cost
              </p>
            </div>
            <div className="text-right">
              <p className="text-orange text-2xl font-bold">
                ${totalRecipeCost.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </TableWrapper>
    </div>
  );
};

export default RecipesAddNew;
