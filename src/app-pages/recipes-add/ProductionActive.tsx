"use client";
import { Switch } from "@/components/ui/switch";
import FormInputField from "@/components/form/FormInputField";
import { useFormContext, Controller } from "react-hook-form";

const ProductionActive = () => {
  const { control, watch } = useFormContext();
  const isProduction = watch("is_production");

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg bg-white">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            Production Active
          </h3>
          <p className="text-sm text-gray-500">
            Enable this recipe for production batching
          </p>
        </div>
        <Controller
          name="is_production"
          control={control}
          render={({ field }) => (
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
      </div>

      {isProduction && (
        <FormInputField
          name="production_inventory_name"
          label="Production Inventory Name"
          placeholder="Enter inventory name for production batch"
          type="text"
          rules={{
            required:
              "Production Inventory Name is required when production is active",
          }}
        />
      )}
    </div>
  );
};

export default ProductionActive;
