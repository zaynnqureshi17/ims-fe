"use client";
import { Button } from "@/components/ui/button";
import { useOutletContext } from "@/context/OutletContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import BrandStatusAdd from "./BrandStatusAdd";
import BrandViewSearch from "./BrandViewSearch";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";

type queryParams = string;

const BrandViewFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const navigate = usePrefetchNavigate();
  const [selectedStatus, setSelectedStatus] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");

  // Load from URL on page load
  useEffect(() => {
    const status = searchParams.get("status") || "";
    const search = searchParams.get("search") || "";

    setSelectedStatus(status);
    setSearchText(search);
  }, [searchParams]);

  const handleUpdateQuery = (status?: string, search?: string) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.admin.viewBrand,
      queryParams: {
        status: status === "all-status" ? "" : status,
        search,
      },
    });
  };
  const handleAddOutlet = () => {
    navigate(ProtectedUrls.admin.addOutlet);
  };
  return (
    <div className="flex gap-6">
      <BrandViewSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) => handleUpdateQuery(selectedStatus, val)}
      />
      <BrandStatusAdd
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        handleUpdateQuery={(status) => handleUpdateQuery(status)}
      />
      <Button variant="secondary" className="w-auto" onClick={handleAddOutlet}>
        Add Brand
      </Button>
    </div>
  );
};

export default memo(BrandViewFilter);
