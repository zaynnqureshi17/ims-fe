"use client";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import StockCountMultipleFilter from "./StockCountMultipleFilter";
import StockCountSearch from "./StockCountSearch";

type queryParams = string;

const StockCountFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedBrand, setSelectedBrand] = useState<queryParams>("");
  const [selectedOutlet, setSelectedOutlet] = useState<queryParams>("");
  const [selectedDepartment, setSelectedDepartment] = useState<queryParams>("");
  const [selectedStatus, setSelectedStatus] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");

  // Load from URL on page load
  useEffect(() => {
    const brand = searchParams.get("brand") || "";
    const outlet = searchParams.get("outlet") || "";
    const department = searchParams.get("department") || "";
    const status = searchParams.get("status") || "";
    const search = searchParams.get("search") || "";

    setSelectedBrand(brand);
    setSelectedOutlet(outlet);
    setSelectedDepartment(department);
    setSelectedStatus(status);
    setSearchText(search);
  }, [searchParams]);

  const handleUpdateQuery = (
    brand?: string,
    outlet?: string,
    department?: string,
    status?: string,
    search?: string,
  ) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.admin.manageSuppliers,
      queryParams: {
        brand: brand === "all-brands" ? "" : brand,
        outlet: outlet === "all-outlets" ? "" : outlet,
        department: department === "all-departments" ? "" : department,
        status: status === "all-status" ? "" : status,
        search: search || "",
      },
    });
  };

  return (
    <div className="flex gap-6">
      <StockCountSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(
            selectedBrand,
            selectedOutlet,
            selectedDepartment,
            selectedStatus,
            val,
          )
        }
      />
      <StockCountMultipleFilter
        selectedBrand={selectedBrand}
        selectedStatus={selectedStatus}
        selectedDepartment={selectedDepartment}
        selectedOutlet={selectedOutlet}
        setSelectedOutlet={setSelectedOutlet}
        setSelectedBrand={setSelectedBrand}
        setSelectedStatus={setSelectedStatus}
        setSelectedDepartment={setSelectedDepartment}
        handleUpdateQuery={(brand, outlet, department, status) =>
          handleUpdateQuery(brand, outlet, department, status, searchText)
        }
      />
    </div>
  );
};

export default memo(StockCountFilter);
