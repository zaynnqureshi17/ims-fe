import SelectField from "@/components/form/SelectField";
import React from "react";
interface SuppliersCategoryServiceFilterProps {
  selectedCategory?: string;
  selectedService?: string;
  setSelectedCategory: (val: string) => void;
  setSelectedService: (val: string) => void;
  handleUpdateQuery: (category?: string, service?: string) => void;
}

const SuppliersCategoryServiceFilter: React.FC<
  SuppliersCategoryServiceFilterProps
> = ({
  selectedCategory,
  selectedService,
  setSelectedCategory,
  setSelectedService,
  handleUpdateQuery,
}) => {
  return (
    <div className="inline-flex gap-6">
      <SelectField
        placeholder="All Categories"
        options={allCategory}
        value={selectedCategory}
        onValueChange={(val) => {
          setSelectedCategory(val);
          handleUpdateQuery(val, selectedService);
        }}
      />
      <SelectField
        placeholder="All Service Areas"
        options={allServiceArea}
        value={selectedService}
        onValueChange={(val) => {
          setSelectedService(val);
          handleUpdateQuery(selectedCategory, val);
        }}
      />
    </div>
  );
};

export default SuppliersCategoryServiceFilter;

const allCategory = [
  { value: "all-categories", label: "All Categories" },
  { value: "category-1", label: "Category 1" },
  { value: "category-2", label: "Category 2" },
  { value: "category-3", label: "Category 3" },
];

const allServiceArea = [
  { value: "all-services", label: "All Service Areas" },
  { value: "service-area-1", label: "Service Area 1" },
  { value: "service-area-2", label: "Service Area 2" },
  { value: "service-area-3", label: "Service Area 3" },
];
