"use client";
import ControllerSelect from "@/components/form/ControllerSelect";
import { Calendar28 } from "@/components/form/DatePicker";
import FormInputField from "@/components/form/FormInputField";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useFormContext } from "react-hook-form";

const categoryOptions = [
  { value: "main-course", label: "Main Course" },
  { value: "salad", label: "Salad" },
  { value: "dessert", label: "Dessert" },
  { value: "beverage", label: "Beverage" },
];

const subCategoryOptions = [
  { value: "veg", label: "Vegetarian" },
  { value: "non-veg", label: "Non-Vegetarian" },
  { value: "vegan", label: "Vegan" },
];

const RecipeField = () => {
  const { control } = useFormContext();

  return (
    <GridWrapper className="grid-cols-1 md:grid-cols-2 ">
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
        name="category"
        control={control}
        label="Category"
        placeholder="Select Category"
        options={categoryOptions}
        rules={{ required: "Category is required" }}
      />
      <ControllerSelect
        name="sub_category"
        control={control}
        label="Sub-category"
        placeholder="Select Sub-category"
        options={subCategoryOptions}
      />
      <Calendar28 name="date" control={control} />
    </GridWrapper>
  );
};

export default RecipeField;
