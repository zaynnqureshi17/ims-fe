"use client";
import IconBg from "@/components/common/IconBg";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { brandsActions } from "@/utils/PublicImageBaseUrl";
import { optionsType } from "@/utils/types/common.type";
import { Controller, useFormContext } from "react-hook-form";

type RecipeIngredientsItemProps = {
  itemOptions: optionsType[];
  headtable: string[];
  fields: any[];
  control: any;
  onDelete: (index: number) => void;
};

const RecipeIngredientsItem: React.FC<RecipeIngredientsItemProps> = ({
  itemOptions,
  headtable,
  fields,
  control,
  onDelete,
}) => {
  const { watch } = useFormContext();

  const ingredients = watch("ingredients") || [];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headtable?.map((head, index) => (
            <TableHead key={index}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {fields.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable.length} className="text-center py-4">
              No ingredients added yet
            </TableCell>
          </TableRow>
        ) : (
          fields.map((field, index) => {
            const qty = Number(ingredients[index]?.quantity_used) || 0;
            const price = Number(ingredients[index]?.unit_price) || 0;
            const yieldPct =
              (Number(ingredients[index]?.yield_percentage) || 100) / 100;
            const rowCost = qty * price * yieldPct;

            return (
              <TableRow key={field.id} className="hover:bg-white my-4">
                {/* Ingredient */}
                <TableCell>
                  <Controller
                    name={`ingredients.${index}.item_id`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={(v) => field.onChange(Number(v))}
                        value={field.value ? field.value.toString() : ""}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Ingredient" />
                        </SelectTrigger>
                        <SelectContent>
                          {itemOptions.map((opt) => (
                            <SelectItem
                              key={opt.value}
                              value={opt.value.toString()}
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </TableCell>

                {/* Quantity Used */}
                <TableCell>
                  <Controller
                    control={control}
                    name={`ingredients.${index}.quantity_used`}
                    render={({ field }) => (
                      <Input {...field} type="number" placeholder="Qty" />
                    )}
                  />
                </TableCell>

                {/* Base UOM */}
                <TableCell>
                  <Controller
                    name={`ingredients.${index}.ingredient_base_uom`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="UOM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">KG</SelectItem>
                          <SelectItem value="g">Gram</SelectItem>
                          <SelectItem value="pcs">PCS</SelectItem>
                          <SelectItem value="ltr">Litre</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </TableCell>

                {/* Yield % */}
                <TableCell>
                  <Controller
                    control={control}
                    name={`ingredients.${index}.yield_percentage`}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="number"
                        step="0.01"
                        placeholder="%"
                      />
                    )}
                  />
                </TableCell>

                {/* Unit Price */}
                <TableCell>
                  <Controller
                    control={control}
                    name={`ingredients.${index}.unit_price`}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="number"
                        step="0.01"
                        placeholder="Cost"
                      />
                    )}
                  />
                </TableCell>

                {/* ✅ Total Cost (calculated live via watch) */}
                <TableCell className="font-semibold">
                  {rowCost.toFixed(2)}
                </TableCell>

                {/* Action */}
                <TableCell>
                  <IconBg
                    icon={`${brandsActions}delete-red.svg`}
                    title="Delete"
                    width={16}
                    height={16}
                    className="!p-0 cursor-pointer"
                    onClick={() => onDelete(index)}
                  />
                </TableCell>
              </TableRow>
            );
          })
        )}
      </TableBody>
    </Table>
  );
};

export default RecipeIngredientsItem;
