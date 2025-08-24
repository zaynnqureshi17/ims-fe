"use client";
import { useCatalogueContext } from "@/context/CatalogueContext";
import { useGetCatalogue } from "@/queries/catalogue/useGetCatalogue.query";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import CatalogueSearch from "./CatalogueSearch";
import CatalogueSupplierFilter from "./CatalogueSupplierFilter";

type queryParams = string;

const CatalogueFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<queryParams>("");
  const [selectedSupplier, setSelectedSupplier] = useState<queryParams>("");
  const [collapsed, setCollapsed] = useState<queryParams>("list");
  const [searchText, setSearchText] = useState<queryParams>("");
  const { data: catalogueData, status } = useGetCatalogue({});
  const { setCatalogue, setLoading } = useCatalogueContext();

  // Load from URL on page load
  useEffect(() => {
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const supplier = searchParams.get("supplier") || "";
    const collapsed = searchParams.get("collapsed") || "list";

    setSearchText(search);
    setSelectedCategory(category);
    setSelectedSupplier(supplier);
    setCollapsed(collapsed);
  }, [searchParams]);

  const handleUpdateQuery = (
    category?: string,
    supplier?: string,
    collapsed?: string,
    search?: string,
  ) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.common.manageCatalogue,
      queryParams: {
        category: category === "all-categories" ? "" : category,
        supplier: supplier === "all-suppliers" ? "" : supplier,
        collapsed: collapsed || "list",
        search,
      },
    });
  };

  useEffect(() => {
    if (catalogueData) {
      setCatalogue(catalogueData.body.data);
      setLoading(status === "pending");
    }
  }, [catalogueData]);

  return (
    <div className="flex gap-6">
      <CatalogueSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(selectedCategory, selectedSupplier, val)
        }
      />
      <CatalogueSupplierFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedSupplier={selectedSupplier}
        setSelectedSupplier={setSelectedSupplier}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        handleUpdateQuery={(category, supplier, collapsed) =>
          handleUpdateQuery(category, supplier, collapsed, searchText)
        }
      />
    </div>
  );
};

export default memo(CatalogueFilter);
