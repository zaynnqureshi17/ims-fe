"use client";
import { useBrandContext } from "@/context/brand.context";
import { useGetBrand } from "@/queries/brands/useGetBrand.query";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import BrandsSearch from "./BrandsSearch";
import BrandsStatusRegionFilter from "./BrandsStatusRegionFilter";

type queryParams = string;

const BrandsFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedStatus, setSelectedStatus] = useState<queryParams>("");
  const [selectedRegion, setSelectedRegion] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");
  const [collapsed, setCollapsed] = useState<queryParams>("list");
  const { setBrand, setLoading } = useBrandContext();

  const { data: brandData, status } = useGetBrand({
    status: selectedStatus,
    region: selectedRegion,
    search: searchText,
  });

  // Load from URL on page load
  useEffect(() => {
    const status = searchParams.get("status") || "";
    const region = searchParams.get("region") || "";
    const search = searchParams.get("search") || "";
    const isCollapsed = searchParams.get("collapsed") || "list";

    setSelectedStatus(status);
    setSelectedRegion(region);
    setSearchText(search);
    setCollapsed(isCollapsed);
  }, [searchParams]);

  const handleUpdateQuery = (
    status?: string,
    region?: string,
    search?: string,
    collapsed?: string,
  ) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.admin.manageBrands,
      queryParams: {
        status: status === "all-status" ? "" : status,
        region: region === "all-regions" ? "" : region,
        search,
        collapsed: collapsed || "list",
      },
    });
  };
  useEffect(() => {
    if (brandData) {
      setBrand(brandData.body.data);
      const loading = status === "pending";
      setLoading(loading);
    }
  }, [brandData]);

  return (
    <div className="flex gap-6">
      <BrandsSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(selectedStatus, selectedRegion, val)
        }
      />
      <BrandsStatusRegionFilter
        selectedStatus={selectedStatus}
        selectedRegion={selectedRegion}
        setSelectedStatus={setSelectedStatus}
        setSelectedRegion={setSelectedRegion}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        handleUpdateQuery={(status, region, collapsed) =>
          handleUpdateQuery(status, region, searchText, collapsed)
        }
      />
    </div>
  );
};

export default memo(BrandsFilter);
