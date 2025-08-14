"use client";
import { useUOMContext } from "@/context/UomContext";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import UnitOfMeasurementSearch from "./UnitOfMeasurementSearch";
import UnitOfMeasurementStatusCategoryFilter from "./UnitOfMeasurementStatusCategoryFilter";
import { useGetUOMs } from "@/queries/uom/useGetUOMs.query";

type queryParams = string;

const UnitOfMeasurementFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedStatus, setSelectedStatus] = useState<queryParams>("");
  const [selectedCategory, setSelectedCategory] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");
  const { setUOM, setLoading } = useUOMContext();
  const { data: uomsData, status } = useGetUOMs({
    category: selectedCategory,
    search: searchText,
  });
  // Load from URL on page load
  useEffect(() => {
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const category = searchParams.get("category") || "";

    setSearchText(search);
    setSelectedStatus(status);
    setSelectedCategory(category);
  }, [searchParams]);

  const handleUpdateQuery = (
    status?: string,
    category?: string,
    search?: string,
  ) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.admin.manageOutlets,
      queryParams: {
        status: status === "all-status" ? "" : status,
        category: category === "all-categories" ? "" : category,
        search: search ? search.trim() : "",
      },
    });
  };

  useEffect(() => {
    setUOM(uomsData?.body?.data);
    const loading = status === "pending";
    setLoading(loading);
  }, [uomsData, status]);

  return (
    <div className="flex gap-6">
      <UnitOfMeasurementSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(selectedStatus, selectedCategory, val)
        }
      />
      <UnitOfMeasurementStatusCategoryFilter
        selectedStatus={selectedStatus}
        selectedCategory={selectedCategory}
        setSelectedStatus={setSelectedStatus}
        setSelectedCategory={setSelectedCategory}
        handleUpdateQuery={(status, category) =>
          handleUpdateQuery(status, category, searchText)
        }
      />
    </div>
  );
};

export default memo(UnitOfMeasurementFilter);
