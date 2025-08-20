"use client";

import ControllerSelect from "@/components/form/ControllerSelect";
import FormInputField from "@/components/form/FormInputField";
import FormTextarea from "@/components/form/FormTextarea";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useFieldArray, useFormContext } from "react-hook-form";

const ItemCountForm = ({ onNext }: { onNext: () => void }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itemCount.items",
  });
  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-6 border p-4 rounded-md">
          {index > 0 && (
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Item {index + 1}</h3>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => remove(index)}
              >
                &times;
              </Button>
            </div>
          )}

          <GridWrapper className="grid-cols-1 md:grid-cols-2 gap-6">
            <FormInputField
              name={`itemCount.items.${index}.item_name`}
              label="Item Name"
              placeholder="Enter item name"
              type="text"
              rules={{ required: "Item name is required" }}
            />

            <ControllerSelect
              name={`itemCount.items.${index}.category`}
              control={control}
              label="Category"
              placeholder="Select Category"
              options={[
                { value: "veg", label: "Vegetables" },
                { value: "meat", label: "Meat" },
                { value: "dairy", label: "Dairy" },
              ]}
              rules={{ required: "Category is required" }}
            />

            <ControllerSelect
              name={`itemCount.items.${index}.storage_area`}
              control={control}
              label="Storage Area"
              placeholder="Select Storage Area"
              options={[
                { value: "cold", label: "Cold Storage" },
                { value: "freezer", label: "Freezer" },
              ]}
              rules={{ required: "Storage area is required" }}
            />

            <FormInputField
              name={`itemCount.items.${index}.full_price`}
              label="Full Price"
              placeholder="Enter full price"
              type="number"
              rules={{ required: "Full price is required" }}
            />
          </GridWrapper>

          <GridWrapper className="grid grid-cols-4">
            <FormInputField
              name={`itemCount.items.${index}.full_units`}
              label="Full Units"
              placeholder="Enter full units"
              type="number"
              rules={{ required: "Full units are required" }}
            />

            <FormInputField
              name={`itemCount.items.${index}.loose_units`}
              label="Loose Units"
              placeholder="Enter loose units"
              type="number"
              rules={{ required: "Loose units are required" }}
            />

            <FormInputField
              name={`itemCount.items.${index}.counted_quantity`}
              label="Counted Quantity"
              placeholder="Enter counted quantity"
              type="number"
              rules={{ required: "Counted quantity is required" }}
            />

            <FormInputField
              name={`itemCount.items.${index}.unit_price`}
              label="Unit Price"
              placeholder="Enter unit price"
              type="number"
              rules={{ required: "Unit price is required" }}
            />
          </GridWrapper>

          <FormTextarea
            name={`itemCount.items.${index}.note_count`}
            label="Notes"
            placeholder="Enter additional notes about this count...."
            rows={6}
          />
        </div>
      ))}

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          className="w-fit"
          onClick={() =>
            append({
              item_name: "",
              category: "",
              storage_area: "",
              full_price: 0,
              full_units: 0,
              loose_units: 0,
              counted_quantity: 0,
              unit_price: 0,
              note_count: "",
            })
          }
        >
          + Add Item
        </Button>
        <Button variant="secondary" className="w-fit" onClick={onNext}>
          Continue to Variance Review
        </Button>
      </div>
    </div>
  );
};

export default ItemCountForm;
