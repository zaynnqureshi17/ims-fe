"use client";
import { usePOContext } from "@/context/POContext";
import { useGetPOs } from "@/queries/purchaseOrder/useGetPO.query";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import PurchaseOrderSearch from "./PurchaseOrderSearch";
import PurchaseOrderStatusFilter from "./PurchaseOrderStatusFilter";

type queryParams = string;

const PurchaseOrderFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setPO, setLoading } = usePOContext();
  const { data: POData, status } = useGetPOs({});
  const [selectedStatus, setSelectedStatus] = useState<queryParams>("");
  const [selectedSupplier, setSelectedSupplier] = useState<queryParams>("");
  const [searchText, setSearchText] = useState<queryParams>("");

  // Load from URL on page load
  useEffect(() => {
    const status = searchParams.get("status") || "";
    const supplier = searchParams.get("supplier") || "";
    const search = searchParams.get("search") || "";

    setSelectedStatus(status);
    setSelectedSupplier(supplier);
    setSearchText(search);
  }, [searchParams]);

  const handleUpdateQuery = (
    status?: string,
    supplier?: string,
    search?: string,
  ) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.admin.manageBrands,
      queryParams: {
        status: status === "all-status" ? "" : status,
        supplier: supplier === "all-suppliers" ? "" : supplier,
        search,
      },
    });
  };

  useEffect(() => {
    if (POData) {
      setPO(POData.body.data);
      setLoading(status === "pending");
    }
  }, [POData]);

  return (
    <div className="flex gap-6">
      <PurchaseOrderSearch
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={(val) =>
          handleUpdateQuery(selectedStatus, selectedSupplier, val)
        }
      />
      <PurchaseOrderStatusFilter
        selectedStatus={selectedStatus}
        selectedSupplier={selectedSupplier}
        setSelectedStatus={setSelectedStatus}
        setSelectedSupplier={setSelectedSupplier}
        handleUpdateQuery={(status, supplier) =>
          handleUpdateQuery(status, supplier, searchText)
        }
      />
    </div>
  );
};

export default memo(PurchaseOrderFilter);
