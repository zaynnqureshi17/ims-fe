"use client";

import ControllerSelect from "@/components/form/ControllerSelect";
import FormInputField from "@/components/form/FormInputField";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useUpdateItemReceiving } from "@/queries/itemReceiving/useUpdateItemReceiving";
import { optionsType } from "@/utils/types/common.type";
import { IItem } from "@/utils/types/item.types";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type ItemFormValues = {
  item_code: string;
  item_name: string;
  specification?: string;
  brand: string; // manufacturer brand - required
  supplier_item_code: string;
  category: string;
  sub_category_1: string;
  sub_category_2: string;
  purchase_by_uom: string;
  purchase_quantity: number;
  purchase_unit: string;
  ml_gram_pcs_per_uom: number;
  unit_uom: string;
  unit_price: number;
  tax?: number;
  primary_supplier_id: string;
  order_name: string;
  packaging_weight?: number;
  brand_id?: string; // optional group brand
};

const ItemReceivingEditForm = ({
  brandOptions,
  item,
}: {
  brandOptions: optionsType[];
  item: IItem;
}) => {
  const { mutate: updateItem, status } = useUpdateItemReceiving();

  const methods = useForm<ItemFormValues>({
    defaultValues: {
      item_code: item.item_code || "",
      item_name: item.item_name || "",
      specification: item.specification || "",
      supplier_item_code: item.supplier_item_code || "",
      category: item.category || "",
      sub_category_1: item.sub_category_1 || "",
      sub_category_2: item.sub_category_2 || "",
      purchase_by_uom: item.purchase_by_uom || "",
      purchase_quantity: item.purchase_quantity ?? 0,
      purchase_unit: item.purchase_unit || "",
      ml_gram_pcs_per_uom: item.ml_gram_pcs_per_uom ?? 0,
      unit_uom: item.unit_uom || "",
      unit_price: item.unit_price ?? 0,
      tax: item.tax ?? 0,
      primary_supplier_id: item.primary_supplier_id?.toString() || "",
      order_name: item.order_name || "",
      packaging_weight: item.packaging_weight ?? 0,
      brand_id: item.brand_id?.toString() || "",
    },
  });
  console.log(item);
  const { handleSubmit, control, reset } = methods;

  const onSubmit = (data: ItemFormValues) => {
    console.log(item.item_id, "sdsad");
    updateItem(
      { body: data, id: item.item_id },
      {
        onSuccess: () => {
          reset(data);
          toast.success("Item updated successfully!");
        },
      },
    );
  };

  const loading = status === "pending";

  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} disabled={loading}>
        <div className="flex flex-col justify-between">
          <GridWrapper className="grid-cols-1 md:grid-cols-2 !gap-4">
            <FormInputField
              name="item_code"
              label="Item Code"
              placeholder="e.g. ITM-0001"
              type="text"
              rules={{ required: "Item Code is required" }}
            />

            <FormInputField
              name="item_name"
              label="Item Name"
              placeholder="e.g. Lemongrass 1KG"
              type="text"
              rules={{ required: "Item Name is required" }}
            />

            <FormInputField
              name="supplier_item_code"
              label="Supplier Item Code"
              placeholder="e.g. SUP-LEM-01"
              type="text"
              rules={{ required: "Supplier Item Code is required" }}
            />

            <ControllerSelect
              name="category"
              control={control}
              label="Category"
              placeholder="Select Category"
              options={[
                { value: "FOOD", label: "Food" },
                { value: "BEVERAGE", label: "Beverage" },
                { value: "OTHERS", label: "Others" },
              ]}
              rules={{ required: "Category is required" }}
            />

            <ControllerSelect
              name="sub_category_1"
              control={control}
              label="Sub Category 1"
              placeholder="Select Sub Category 1"
              options={[
                { value: "PRIMARY", label: "Primary" },
                { value: "SECONDARY", label: "Secondary" },
              ]}
              rules={{ required: "Sub Category 1 is required" }}
            />

            <ControllerSelect
              name="sub_category_2"
              control={control}
              label="Sub Category 2"
              placeholder="Select Sub Category 2"
              options={[
                { value: "NONE", label: "None" },
                { value: "ALT", label: "Alt" },
              ]}
            />

            <ControllerSelect
              name="purchase_by_uom"
              control={control}
              label="Purchase By (Outer UOM)"
              placeholder="Select Outer UOM"
              options={[
                { value: "CTN", label: "CTN" },
                { value: "PKT", label: "PKT" },
                { value: "BTL", label: "BTL" },
                { value: "KG", label: "KG" },
                { value: "L", label: "L" },
              ]}
              rules={{ required: "Purchase By UOM is required" }}
            />

            <FormInputField
              name="purchase_quantity"
              label="Purchase Quantity"
              placeholder="e.g. 6"
              type="number"
              rules={{
                required: "Purchase Quantity is required",
                min: { value: 1, message: "Must be ≥ 1" },
              }}
            />

            <FormInputField
              name="purchase_unit"
              label="Purchase Unit"
              placeholder="e.g. PKT"
              type="text"
              rules={{ required: "Purchase Unit is required" }}
            />

            <FormInputField
              name="ml_gram_pcs_per_uom"
              label="ML/GRAM/PCS per UOM"
              placeholder="e.g. 1000"
              type="number"
              rules={{
                required: "Conversion factor is required",
                min: { value: 1, message: "Must be ≥ 1" },
              }}
            />

            <ControllerSelect
              name="unit_uom"
              control={control}
              label="Unit UOM (Base)"
              placeholder="Select Base UOM"
              options={[
                { value: "ML", label: "ML" },
                { value: "GRAM", label: "GRAM" },
                { value: "PCS", label: "PCS" },
              ]}
              rules={{ required: "Unit UOM is required" }}
            />

            <FormInputField
              name="unit_price"
              label="Unit Price"
              placeholder="e.g. 500"
              type="number"
              rules={{
                required: "Unit Price is required",
                min: { value: 0, message: "Must be ≥ 0" },
              }}
            />

            <FormInputField
              name="tax"
              label="Tax (%)"
              placeholder="e.g. 6"
              type="number"
            />

            <ControllerSelect
              name="primary_supplier_id"
              control={control}
              label="Primary Supplier"
              placeholder="Select Supplier"
              options={[
                { value: "1", label: "FK Foods" },
                { value: "2", label: "Metro" },
              ]}
              rules={{ required: "Primary Supplier is required" }}
            />

            <FormInputField
              name="order_name"
              label="Supplier Order Name"
              placeholder="e.g. Lemongrass Stalks 1KG"
              type="text"
              rules={{ required: "Supplier Order Name is required" }}
            />

            <FormInputField
              name="specification"
              label="Specification"
              placeholder="Optional"
              type="text"
            />

            <FormInputField
              name="packaging_weight"
              label="Packaging Weight"
              placeholder="e.g. 50"
              type="number"
            />

            <ControllerSelect
              name="brand_id"
              control={control}
              label="Group Brand (Optional)"
              placeholder="Select Brand"
              options={brandOptions}
            />
          </GridWrapper>
        </div>

        <div className="flex justify-end items-center mt-4 gap-6">
          <Button type="button" variant="cancel" className="w-fit">
            Cancel
          </Button>
          <Button type="submit" variant="secondary" className="w-fit">
            Save Item
          </Button>
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default ItemReceivingEditForm;
