"use client";
import { useRecipeContext } from "@/context/RecipeContext";
import { useGetRecipe } from "@/queries/recipe/useGetRecipe.query";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import RecipesSearch from "./RecipesSearch";
import RecipesCategoryCostFilter from "./RecipesStatusFilter";

type queryParams = string;

const RecipesFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<queryParams>("");
  const [selectedCostRange, setSelectedCostRange] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");
  const { setRecipe, setLoading } = useRecipeContext();
  const { data: recipeData, status } = useGetRecipe({});

  useEffect(() => {
    const category = searchParams.get("category") || "";
    const costRange = searchParams.get("costRange") || "";
    const search = searchParams.get("search") || "";
    setSelectedCategory(category);
    setSelectedCostRange(costRange);
    setSearchText(search);
  }, [searchParams]);

  useEffect(() => {
    if (recipeData) {
      setRecipe(recipeData.body.data);
      setLoading(status === "pending");
    }
  }, [recipeData]);

  const handleUpdateQuery = (
    category?: string,
    costRange?: string,
    search?: string,
  ) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.common.manageRecipes,
      queryParams: {
        category: category === "all-categories" ? "" : category,
        costRange: costRange === "all-cost" ? "" : costRange,
        search,
      },
    });
  };

  return (
    <div className="flex gap-6">
      <RecipesSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(selectedCategory, selectedCostRange, val)
        }
      />
      <RecipesCategoryCostFilter
        selectedCategory={selectedCategory}
        selectedCostRange={selectedCostRange}
        setSelectedCategory={setSelectedCategory}
        setSelectedCostRange={setSelectedCostRange}
        handleUpdateQuery={(category, costRange) =>
          handleUpdateQuery(category, costRange, searchText)
        }
      />
    </div>
  );
};

export default memo(RecipesFilter);
