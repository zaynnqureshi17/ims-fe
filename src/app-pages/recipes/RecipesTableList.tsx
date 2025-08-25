"use client";
import { useRecipeContext } from "@/context/RecipeContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { useDeleteRecipe } from "@/queries/recipe/useDeleteRecipe.query";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import { toast } from "react-toastify";
import RecipesTable from "./RecipesTable";

const RecipesTableList: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { recipe } = useRecipeContext();
  const { mutate: deleteRecipe } = useDeleteRecipe();

  const handleEditRecipe = (recipeId: number) => {
    navigate(
      ProtectedUrls.common.editRecipe.replace(":id", recipeId.toString()),
    );
  };

  const handleDeleteRecipe = (recipeId: number) => {
    console.log("Deleting recipe with ID:", recipeId);
    deleteRecipe(
      { id: recipeId },
      {
        onSuccess: () => {
          toast.success("Recipe deleted successfully");
          console.log("Recipe deleted successfully");
        },
      },
    );
  };

  const handleViewRecipe = (recipeId: number) => {
    navigate(
      ProtectedUrls.common.viewRecipe.replace(":id", recipeId.toString()),
    );
  };

  return (
    <RecipesTable
      recipes={recipe}
      onEdit={handleEditRecipe}
      onDelete={handleDeleteRecipe}
      onView={handleViewRecipe}
    />
  );
};

export default memo(RecipesTableList);
