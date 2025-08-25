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
import { Controller } from "react-hook-form";

type TransferItemsProps = {
  itemOptions: optionsType[];
  headtable: string[];
  fields: any[];
  control: any;
  onDelete: (index: number) => void;
};

const TransferItems: React.FC<TransferItemsProps> = ({
  itemOptions,
  headtable,
  fields,
  control,
  onDelete,
}) => {
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
              No Item available
            </TableCell>
          </TableRow>
        ) : (
          fields.map((field, index) => (
            <TableRow key={field.id} className="hover:bg-white my-4">
              {/* Item ID */}
              <TableCell>
                <Controller
                  name={`transfer_items.${index}.item_id`}
                  control={control}
                  render={({ field }) => (
                    <Select
                      onValueChange={(v) => field.onChange(Number(v))}
                      value={field.value ? field.value.toString() : ""}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Item" />
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

              {/* Transfer Qty */}
              <TableCell>
                <Controller
                  control={control}
                  name={`transfer_items.${index}.transfer_qty`}
                  render={({ field }) => (
                    <Input {...field} type="number" placeholder="Qty" />
                  )}
                />
              </TableCell>

              {/* UOM */}
              <TableCell>
                <Controller
                  name={`transfer_items.${index}.uom`} // ✅ FIXED
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select UOM" />
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

              {/* Unit Cost */}
              <TableCell>
                <Controller
                  control={control}
                  name={`transfer_items.${index}.unit_cost`}
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

              {/* Total Cost (calculated) */}
              <TableCell className="font-semibold">
                {(
                  (parseFloat(field.transfer_qty) || 0) *
                  (parseFloat(field.unit_cost) || 0)
                ).toFixed(2)}
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
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default TransferItems;
