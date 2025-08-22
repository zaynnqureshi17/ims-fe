"use client";
import { useOutletContext } from "@/context/OutletContext";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";
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
  const { setOutlet, setLoading } = useOutletContext();

  const { data: outletsData, status } = useGetOutlets({
    status: selectedStatus,
    region: selectedRegion,
    brand: selectedBrand,
    search: searchText,
  });

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

  useEffect(() => {
    if (outletsData) {
      setOutlet(outletsData?.body?.data);
      const loading = status === "pending";
      setLoading(loading);
    }
  }, [outletsData]);

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
