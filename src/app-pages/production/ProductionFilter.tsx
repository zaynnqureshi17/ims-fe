"use client";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import ProductionRecipeFilter from "./ProductionRecipeFilter";
import ProductionSearch from "./ProductionSearch";

type queryParams = string;

const ProductionFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<queryParams>("");
  const [selectedCostRange, setSelectedCostRange] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");

  useEffect(() => {
    const category = searchParams.get("category") || "";
    const costRange = searchParams.get("costRange") || "";
    const search = searchParams.get("search") || "";
    setSelectedCategory(category);
    setSelectedCostRange(costRange);
    setSearchText(search);
  }, [searchParams]);

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
      <ProductionSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(selectedCategory, selectedCostRange, val)
        }
      />
      <ProductionRecipeFilter
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

export default memo(ProductionFilter);
