"use client";

import FormInputField from "@/components/form/FormInputField";
import SelectField from "@/components/form/Select";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { FormProvider, useForm } from "react-hook-form";

const ItemReceivingEditForm = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col justify-between">
        <GridWrapper className="grid-cols-1 md:grid-cols-2 !gap-4">
          <FormInputField
            name="itemName"
            label="Item Name"
            placeholder="e.g. Lemongrass 1KG"
            type="text"
          />
          <SelectField
            label="Brand"
            className="w-full bg-white"
            placeholder="Select Brand"
            options={[
              { value: "National", label: "National" },
              { value: "Dalda", label: "Dalda" },
            ]}
          />
          <SelectField
            label="Category"
            className="w-full bg-white"
            placeholder="Select Category"
            options={[
              { value: "Food", label: "Food" },
              { value: "Beverage", label: "Beverage" },
            ]}
          />
          <SelectField
            label="Sub Category"
            className="w-full bg-white"
            placeholder="Select Sub Category"
            options={[
              { value: "Primary", label: "Primary" },
              { value: "Secondary", label: "Secondary" },
            ]}
          />
          <FormInputField
            name="supplierCode"
            label="Supplier Code"
            placeholder="Optional"
            type="text"
          />
          <SelectField
            label="Purchase By"
            className="w-full bg-white"
            placeholder="Select Outer UOM"
            options={[
              { value: "CTN", label: "CTN" },
              { value: "PKT", label: "PKT" },
              { value: "BTL", label: "BTL" },
            ]}
          />
          <FormInputField
            name="quantity"
            label="Quantity"
            placeholder="e.g. 6"
            type="number"
          />
          <FormInputField
            name="mlPerUom"
            label="ML/GRAM/PCS per UOM"
            placeholder="e.g. 1000"
            type="number"
          />
          <FormInputField
            name="unitPrice"
            label="Unit Price"
            placeholder="e.g. 500"
            type="number"
          />
          <SelectField
            label="UOM"
            className="w-full bg-white"
            placeholder="Select Purchase Unit"
            options={[
              { value: "CTN", label: "CTN" },
              { value: "PKT", label: "PKT" },
            ]}
          />
          <SelectField
            label="Unit UOM"
            className="w-full bg-white"
            placeholder="Select Base UOM"
            options={[
              { value: "ML", label: "ML" },
              { value: "GRAM", label: "GRAM" },
              { value: "PCS", label: "PCS" },
            ]}
          />
          <SelectField
            label="Supplier"
            className="w-full bg-white"
            placeholder="Select Supplier"
            options={[
              { value: "FK Foods", label: "FK Foods" },
              { value: "Metro", label: "Metro" },
            ]}
          />
          <FormInputField
            name="supplierOrderName"
            label="Supplier Order Name"
            placeholder="Optional"
            type="text"
          />
          <SelectField
            label="Status"
            className="w-full bg-white"
            placeholder="Active"
            options={[
              { value: "Active", label: "Active" },
              { value: "Inactive", label: "Inactive" },
            ]}
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
    </FormProvider>
  );
};

export default ItemReceivingEditForm;
