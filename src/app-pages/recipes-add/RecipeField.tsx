"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import { Calendar28 } from "@/components/form/DatePicker";
import FormInputField from "@/components/form/FormInputField";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useFormContext } from "react-hook-form";

const categoryOptions = [
  { value: "FOOD", label: "Food" },
  { value: "BEVERAGE", label: "Beverage" },
  { value: "DESSERT", label: "Dessert" },
  { value: "PRODUCTION", label: "Production" },
];

const subCategoryOptions1 = [
  { value: "MAIN", label: "Main" },
  { value: "SIDE", label: "Side" },
  { value: "SNACK", label: "Snack" },
];

const subCategoryOptions2 = [
  { value: "VEG", label: "Vegetarian" },
  { value: "NON-VEG", label: "Non-Vegetarian" },
  { value: "VEGAN", label: "Vegan" },
];

const RecipeField = () => {
  const { control } = useFormContext();

  return (
    <GridWrapper className="grid-cols-1 md:grid-cols-2">
      <FormInputField
        name="recipe_name"
        label="Recipe Name"
        placeholder="Enter recipe name"
        type="text"
        rules={{
          required: "Recipe Name is required",
        }}
      />

      <ControllerSelect
        name="recipe_category"
        control={control}
        label="Category"
        placeholder="Select Category"
        options={categoryOptions}
        rules={{ required: "Category is required" }}
      />

      <ControllerSelect
        name="recipe_subcategory_1"
        control={control}
        label="Sub-category 1"
        placeholder="Select Sub-category"
        options={subCategoryOptions1}
      />

      <ControllerSelect
        name="recipe_subcategory_2"
        control={control}
        label="Sub-category 2"
        placeholder="Select Sub-category"
        options={subCategoryOptions2}
      />

      <Calendar28 name="start_date" control={control} label="Start Date" />
    </GridWrapper>
  );
};

export default RecipeField;
