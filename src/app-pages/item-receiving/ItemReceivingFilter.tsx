"use client";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import ItemReceivingMultipleFilter from "./ItemReceivingMultipleFilter";
import ItemReceivingSearch from "./ItemReceivingSearch";

type queryParams = string;

const ItemReceivingFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedStatus, setSelectedStatus] = useState<queryParams>("");
  const [selectedCategory, setSelectedCategory] = useState<queryParams>("");
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<queryParams>("");
  const [selectedSupplier, setSelectedSupplier] = useState<queryParams>("");
  const [selectedBrand, setSelectedBrand] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");

  // Load from URL on page load
  useEffect(() => {
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const category = searchParams.get("category") || "";
    const subCategory = searchParams.get("subCategory") || "";
    const supplier = searchParams.get("supplier") || "";
    const brand = searchParams.get("brand") || "";

    setSearchText(search);
    setSelectedStatus(status);
    setSelectedCategory(category);
    setSelectedSubCategory(subCategory);
    setSelectedSupplier(supplier);
    setSelectedBrand(brand);
  }, [searchParams]);

  const handleUpdateQuery = (
    status?: string,
    category?: string,
    brand?: string,
    subCategory?: string,
    supplier?: string,
    search?: string,
  ) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.common.manageItemReceiving,
      queryParams: {
        status: status === "all-status" ? "" : status,
        category: category === "all-categories" ? "" : category,
        subCategory: subCategory === "all-subcategories" ? "" : subCategory,
        supplier: supplier === "all-suppliers" ? "" : supplier,
        brand: brand === "all-brands" ? "" : brand,
        search: search ? search.trim() : "",
      },
    });
  };

  return (
    <div className="flex gap-6">
      <ItemReceivingSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(
            selectedStatus,
            selectedCategory,
            selectedBrand,
            selectedSubCategory,
            selectedSupplier,
            val,
          )
        }
      />
      <ItemReceivingMultipleFilter
        selectedStatus={selectedStatus}
        selectedCategory={selectedCategory}
        setSelectedStatus={setSelectedStatus}
        setSelectedSubCategory={setSelectedSubCategory}
        selectedSubCategory={selectedSubCategory}
        selectedSupplier={selectedSupplier}
        setSelectedSupplier={setSelectedSupplier}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        setSelectedCategory={setSelectedCategory}
        handleUpdateQuery={(
          status,
          selectedCategory,
          selectedBrand,
          selectedSubCategory,
          selectedSupplier,
        ) =>
          handleUpdateQuery(
            status,
            selectedCategory,
            selectedBrand,
            selectedSubCategory,
            selectedSupplier,
            searchText,
          )
        }
      />
    </div>
  );
};

export default memo(ItemReceivingFilter);
