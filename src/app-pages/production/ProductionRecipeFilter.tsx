import SelectField from "@/components/form/SelectField";
import React from "react";

interface ProductionRecipeFilter {
  selectedCategory?: string;
  selectedCostRange?: string;
  setSelectedCategory: (val: string) => void;
  setSelectedCostRange: (val: string) => void;
  handleUpdateQuery: (category?: string, costRange?: string) => void;
}

const ProductionRecipeFilter: React.FC<ProductionRecipeFilter> = ({
  selectedCategory,
  selectedCostRange,
  setSelectedCategory,
  setSelectedCostRange,
  handleUpdateQuery,
}) => {
  return (
    <div className="inline-flex gap-6">
      <SelectField
        placeholder="All Categories"
        options={allCategories}
        value={selectedCategory}
        onValueChange={(val) => {
          setSelectedCategory(val);
          handleUpdateQuery(val, selectedCostRange);
        }}
      />
      <SelectField
        placeholder="Cost Range"
        options={allCostRanges}
        value={selectedCostRange}
        onValueChange={(val) => {
          setSelectedCostRange(val);
          handleUpdateQuery(selectedCategory, val);
        }}
      />
    </div>
  );
};

export default ProductionRecipeFilter;

const allCategories = [
  { value: "all-categories", label: "All Categories" },
  { value: "food", label: "Food" },
  { value: "beverage", label: "Beverage" },
  { value: "dessert", label: "Dessert" },
];

const allCostRanges = [
  { value: "all-cost", label: "All Cost Range" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];
