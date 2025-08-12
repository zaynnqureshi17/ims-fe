"use client";
import { useSupplierContext } from "@/context/SupplierContext";
import { useGetSupplier } from "@/queries/supplier/useGetSupplier.query";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import SuppliersCategoryServiceFilter from "./SuppliersCategoryServiceFilter";
import SuppliersSearch from "./SuppliersSearch";

type queryParams = string;

const SuppliersFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<queryParams>("");
  const [selectedService, setSelectedService] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");
  const { setSupplier, setLoading } = useSupplierContext();
  const { data: supplierData, status } = useGetSupplier({
    category: selectedCategory,
    service: selectedService,
    search: searchText,
  });
  // Load from URL on page load
  useEffect(() => {
    const category = searchParams.get("category") || "";
    const service = searchParams.get("service") || "";
    const search = searchParams.get("search") || "";

    setSelectedCategory(category);
    setSelectedService(service);
    setSearchText(search);
  }, [searchParams]);

  const handleUpdateQuery = (
    category?: string,
    service?: string,
    search?: string,
  ) => {
    console.log("Updating query params:", { category, service, search });
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.admin.manageSuppliers,
      queryParams: {
        category: category === "all-categories" ? "" : category,
        service: service === "all-services" ? "" : service,
        search: search || "",
      },
    });
  };
  useEffect(() => {
    if (supplierData) {
      setSupplier(supplierData.body.data);
      setLoading(status === "pending");
    }
  }, [supplierData]);

  return (
    <div className="flex gap-6">
      <SuppliersSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(selectedCategory, selectedService, val)
        }
      />
      <SuppliersCategoryServiceFilter
        selectedCategory={selectedCategory}
        selectedService={selectedService}
        setSelectedCategory={setSelectedCategory}
        setSelectedService={setSelectedService}
        handleUpdateQuery={(category, service) =>
          handleUpdateQuery(category, service, searchText)
        }
      />
    </div>
  );
};

export default memo(SuppliersFilter);
