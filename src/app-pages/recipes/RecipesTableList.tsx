"use client";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { IRecips } from "@/utils/types/recipe.type";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import RecipesTable from "./RecipesTable";

const RecipesTableList: React.FC = () => {
  const navigate = usePrefetchNavigate();

  const handleEditRecipe = (recipeId: number) => {
    navigate(
      ProtectedUrls.common.editRecipe.replace(":id", recipeId.toString()),
    );
  };

  const handleDeleteRecipe = (recipeId: number) => {
    console.log("Deleting recipe with ID:", recipeId);
  };

  const handleViewRecipe = (recipeId: number) => {
    navigate(
      ProtectedUrls.common.viewRecipe.replace(":id", recipeId.toString()),
    );
  };

  return (
    <RecipesTable
      recipes={recipes}
      onEdit={handleEditRecipe}
      onDelete={handleDeleteRecipe}
      onView={handleViewRecipe}
    />
  );
};

export default memo(RecipesTableList);

const recipes: IRecips[] = [
  {
    recipe_name: "Grilled Salmon",
    category: "Main Course",
    ingrediants_count: 12,
    cost: "18.50",
    version: "v2.1",
  },
  {
    recipe_name: "Grilled Salmon",
    category: "Salad",
    ingrediants_count: 12,
    cost: "18.50",
    version: "v2.1",
  },
  {
    recipe_name: "Grilled Salmon",
    category: "Dessert",
    ingrediants_count: 12,
    cost: "18.50",
    version: "v2.1",
  },
  {
    recipe_name: "Grilled Salmon",
    category: "Main Course",
    ingrediants_count: 12,
    cost: "18.50",
    version: "v2.1",
  },
  {
    recipe_name: "Grilled Salmon",
    category: "Beverage",
    ingrediants_count: 12,
    cost: "18.50",
    version: "v2.1",
  },
];
