import SelectField from "@/components/form/Select";
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
        options={allStatus}
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

const allStatus = [
  { value: "all-status", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

const allCategories = [
  { value: "all-category", label: "All Categories" },
  { value: "category-a", label: "Category A" },
  { value: "category-b", label: "Category B" },
  { value: "category-c", label: "Category C" },
  { value: "category-d", label: "Category D" },
];
