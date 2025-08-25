"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import FormInputField from "@/components/form/FormInputField";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { optionsType } from "@/utils/types/common.type";
import { Trash2 } from "lucide-react";
import { useFormContext } from "react-hook-form";

interface PurchaseOrderItemProps {
  itemOptions: optionsType[];
  headtable: string[];
  POItem: any[];
  remove: (index: number) => void;
  loading?: boolean;
}

const PurchaseOrderItem = ({
  itemOptions,
  headtable,
  POItem,
  remove,
}: PurchaseOrderItemProps) => {
  const { control, watch } = useFormContext();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headtable.map((head, index) => (
            <TableHead key={index}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {POItem.map((field, index) => {
          const quantity = watch(`po_items.${index}.quantity`) || 0;
          const unit_price = watch(`po_items.${index}.unit_price`) || 0;
          const total = quantity * parseFloat(unit_price || 0);

          return (
            <TableRow key={field.id}>
              <TableCell>
                <ControllerSelect
                  label=""
                  name={`po_items.${index}.item_id`}
                  control={control}
                  options={itemOptions}
                  placeholder="Select Item"
                  rules={{ required: "Item is required" }}
                />
              </TableCell>
              <TableCell>
                <FormInputField
                  label=""
                  name={`po_items.${index}.quantity`}
                  type="number"
                  placeholder="0"
                  rules={{ required: "Quantity is required", min: 1 }}
                />
              </TableCell>
              <TableCell>
                <FormInputField
                  label=""
                  name={`po_items.${index}.unit_price`}
                  type="number"
                  placeholder="0.00"
                  rules={{ required: "Unit Price is required", min: 0 }}
                />
              </TableCell>
              <TableCell>${total.toFixed(2)}</TableCell>
              <TableCell>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default PurchaseOrderItem;
