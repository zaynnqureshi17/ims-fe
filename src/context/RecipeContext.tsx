"use client";
import { IRecips } from "@/utils/types/recipe.type";
import React, { useState } from "react";

type props = {
  children: React.ReactNode;
};

type RecipeContextType = {
  recipe: IRecips[] | [];
  setRecipe: React.Dispatch<React.SetStateAction<IRecips[] | []>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const RecipeContext = React.createContext<RecipeContextType | undefined>(
  undefined,
);
const RecipeProvider: React.FC<props> = ({ children }) => {
  const [recipe, setRecipe] = useState<IRecips[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <RecipeContext.Provider value={{ recipe, setRecipe, loading, setLoading }}>
      {children}
    </RecipeContext.Provider>
  );
};
const useRecipeContext = () => {
  const context = React.useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  const { recipe, setRecipe, loading, setLoading } = context;
  return {
    recipe,
    setRecipe,
    loading,
    setLoading,
  };
};

export { RecipeProvider, useRecipeContext };
