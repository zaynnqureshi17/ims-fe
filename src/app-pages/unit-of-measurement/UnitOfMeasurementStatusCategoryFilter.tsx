import SelectField from "@/components/form/SelectField";
import { AllStatus } from "@/constant/status";
import React from "react";
interface UnitOfMeasurementStatusCategoryFilterProps {
  selectedStatus?: string;
  selectedCategory?: string;
  selectedBrand?: string;
  setSelectedStatus: (val: string) => void;
  setSelectedCategory: (val: string) => void;
  handleUpdateQuery: (status?: string, category?: string) => void;
}

const UnitOfMeasurementStatusCategoryFilter: React.FC<
  UnitOfMeasurementStatusCategoryFilterProps
> = ({
  selectedStatus,
  selectedCategory,
  setSelectedStatus,
  setSelectedCategory,
  handleUpdateQuery,
}) => {
  return (
    <div className="inline-flex gap-6">
      <SelectField
        placeholder="All Status"
        options={AllStatus}
        value={selectedStatus}
        onValueChange={(val) => {
          setSelectedStatus(val);
          handleUpdateQuery(val, selectedCategory);
        }}
      />
      <SelectField
        placeholder="All Categories"
        options={allCategories}
        value={selectedCategory}
        onValueChange={(val) => {
          setSelectedCategory(val);
          handleUpdateQuery(selectedStatus, val);
        }}
      />
    </div>
  );
};

export default UnitOfMeasurementStatusCategoryFilter;

const allCategories = [
  { value: "category-a", label: "Category A" },
  { value: "category-b", label: "Category B" },
  { value: "category-c", label: "Category C" },
  { value: "category-d", label: "Category D" },
];
