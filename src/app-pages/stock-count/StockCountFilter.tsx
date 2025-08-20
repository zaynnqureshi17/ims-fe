"use client";
import { Button } from "@/components/ui/button";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import StockCountMultipleFilter from "./StockCountMultipleFilter";

type queryParams = string;

const StockCountFilter: React.FC = () => {
  const today = new Date().toISOString().split("T")[0];
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<queryParams>("");
  const [selectedStorageArea, setSelectedStorageArea] =
    useState<queryParams>("");
  const [selectedStatus, setSelectedStatus] = useState<queryParams>("");

  const [selectedDeliveryData, setSelectedDeliveryData] =
    useState<queryParams>(today);

  // Load from URL on page load
  useEffect(() => {
    const category = searchParams.get("category") || "";
    const storageArea = searchParams.get("storageArea") || "";
    const status = searchParams.get("status") || "";

    setSelectedCategory(category);
    setSelectedStorageArea(storageArea);
    setSelectedStatus(status);
  }, [searchParams]);

  const handleUpdateQuery = (
    deliveryData?: string,
    category?: string,
    storageArea?: string,
    status?: string,
  ) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.admin.manageSuppliers,
      queryParams: {
        deliveryData: deliveryData || selectedDeliveryData,
        category: category === "all-categories" ? "" : category,
        storageArea: storageArea === "all-storage-areas" ? "" : storageArea,
        status: status === "all-status" ? "" : status,
      },
    });
  };

  const handleApplyFilter = () => {
    handleUpdateQuery(
      selectedDeliveryData,
      selectedCategory,
      selectedStorageArea,
      selectedStatus,
    );
  };

  return (
    <div className="flex gap-6">
      <StockCountMultipleFilter
        selectedDeliveryData={selectedDeliveryData}
        selectedCategory={selectedCategory}
        selectedStatus={selectedStatus}
        selectedStorageArea={selectedStorageArea}
        setSelectedDeliveryData={setSelectedDeliveryData}
        setSelectedCategory={setSelectedCategory}
        setSelectedStatus={setSelectedStatus}
        setSelectedStorageArea={setSelectedStorageArea}
        handleUpdateQuery={handleUpdateQuery}
      />
      <Button className="w-auto" onClick={handleApplyFilter}>
        Apply Filter
      </Button>
    </div>
  );
};

export default memo(StockCountFilter);
