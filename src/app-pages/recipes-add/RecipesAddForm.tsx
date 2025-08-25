"use client";
import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/components/wrapper/FormWrapper";
import { useCreateRecipe } from "@/queries/recipe/useCreateRecipe.query";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RecipesAddForm = ({ children }: { children: React.ReactNode }) => {
  const { mutate: createReceipe, status } = useCreateRecipe();
  const methods = useForm({
    defaultValues: {
      recipe_name: "",
      recipe_category: "",
      recipe_subcategory_1: "",
      recipe_subcategory_2: "",
      start_date: new Date(),
      is_production: false,
      production_inventory_name: "",
      cost: 0,
      cost_per_unit: 0,
      ingredients: [],
    },
  });

  const { handleSubmit, reset } = methods;

  const calculateCosts = (
    ingredients: any[],
    final_output_quantity: number,
  ) => {
    const totalCost = ingredients.reduce((acc, item) => {
      const qty = Number(item?.quantity_used) || 0;
      const price = Number(item?.unit_price) || 0;
      const yieldPct = (Number(item?.yield_percentage) || 100) / 100;
      return acc + qty * price * yieldPct;
    }, 0);

    const costPerUnit =
      final_output_quantity > 0 ? totalCost / final_output_quantity : 0;

    return { totalCost, costPerUnit };
  };

  const handleSubmitRecipe = (data: any) => {
    const { totalCost, costPerUnit } = calculateCosts(
      data.ingredients,
      data.final_output_quantity,
    );

    const payload = {
      ...data,
      cost: totalCost,
      cost_per_unit: costPerUnit,
    };

    createReceipe(
      { body: payload },
      {
        onSuccess: () => {
          reset();
          toast.success("Recipe created successfully");
        },
      },
    );
  };

  const handleSaveToDraft = () => {
    console.log("Saving draft...");
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper
        onSubmit={handleSubmit(handleSubmitRecipe)}
        disabled={status === "pending"}
      >
        <div className="flex flex-col justify-between gap-6">
          {children}
          <div className="flex justify-end items-end gap-4">
            <Button
              variant="secondary"
              className="w-auto"
              type="button"
              onClick={handleSaveToDraft}
            >
              Save as Draft
            </Button>
            <Button variant="secondary" className="w-auto" type="submit">
              Save Recipe
            </Button>
          </div>
        </div>
      </FormWrapper>
    </FormProvider>
  );
};

export default RecipesAddForm;
