"use client";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import BrandsStatusRegionFilter from "./OutletsBrandsStatusRegionFilter";
import BrandsSearch from "./OutletsSearch";

type queryParams = string;

const OutletsFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedStatus, setSelectedStatus] = useState<queryParams>("");
  const [selectedRegion, setSelectedRegion] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");
  const [selectedBrand, setSelectedBrand] = useState<queryParams>("");

  // Load from URL on page load
  useEffect(() => {
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const brand = searchParams.get("brand") || "";
    const region = searchParams.get("region") || "";

    setSearchText(search);
    setSelectedStatus(status);
    setSelectedBrand(brand);
    setSelectedRegion(region);
  }, [searchParams]);

  const handleUpdateQuery = (
    status?: string,
    brand?: string,
    region?: string,
    search?: string,
  ) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.admin.manageOutlets,
      queryParams: {
        status: status === "all-status" ? "" : status,
        brand: brand === "all-brands" ? "" : brand,
        region: region === "all-regions" ? "" : region,
        search,
      },
    });
  };

  return (
    <div className="flex gap-6">
      <BrandsSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(selectedStatus, selectedBrand, selectedRegion, val)
        }
      />
      <BrandsStatusRegionFilter
        selectedStatus={selectedStatus}
        selectedRegion={selectedRegion}
        setSelectedStatus={setSelectedStatus}
        setSelectedRegion={setSelectedRegion}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        handleUpdateQuery={(status, brand, region) =>
          handleUpdateQuery(status, brand, region, searchText)
        }
      />
    </div>
  );
};

export default memo(OutletsFilter);
