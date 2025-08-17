import SelectField from "@/components/form/SelectField";
import { Button } from "@/components/ui/button";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React from "react";

interface RecipesCategoryCostFilterProps {
  selectedCategory?: string;
  selectedCostRange?: string;
  setSelectedCategory: (val: string) => void;
  setSelectedCostRange: (val: string) => void;
  handleUpdateQuery: (category?: string, costRange?: string) => void;
}

const RecipesCategoryCostFilter: React.FC<RecipesCategoryCostFilterProps> = ({
  selectedCategory,
  selectedCostRange,
  setSelectedCategory,
  setSelectedCostRange,
  handleUpdateQuery,
}) => {
  const navigate = usePrefetchNavigate();

  const handleExport = () => {
    console.log("Exporting recipes");
    // navigate(ProtectedUrls.admin.exportRecipes);
  };

  const handleAddRecipe = () => {
    console.log("Adding new recipe");
    navigate(ProtectedUrls.common.addRecipe);
  };

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
      <div className="flex justify-end items-end gap-3">
        <Button variant="secondary" className="w-auto" onClick={handleExport}>
          Export
        </Button>
        <Button
          variant="secondary"
          className="w-auto"
          onClick={handleAddRecipe}
        >
          Add Recipe
        </Button>
      </div>
    </div>
  );
};

export default RecipesCategoryCostFilter;

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
