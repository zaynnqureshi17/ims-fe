"use client";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";
import BrandsTable from "./BrandsTable";

const BrandsTableCard: React.FC = () => {
  const [collapsed, setCollapsed] = useState<string>("list");
  const navigate = usePrefetchNavigate();
  const searchParams = useSearchParams();

  // Initialize the collapsed state based on the search parameters
  useEffect(() => {
    const isCollapsed = searchParams.get("collapsed") || "list";
    setCollapsed(isCollapsed);
  }, [searchParams]);

  const handleEditBrand = (brandId: number) => {
    navigate(ProtectedUrls.admin.editBrand);
  };

  const handleDeleteBrand = () => {
    // TODO
    console.log("Delete brand action triggered");
  };

  const handleViewBrand = (brandId: number) => {
    navigate(ProtectedUrls.admin.viewBrand);
  };

  if (collapsed === "grid") {
    return <BrandsCard onEdit={handleEditBrand} />;
  }
  if (collapsed === "list") {
    return (
      <BrandsTable
        onEdit={handleEditBrand}
        onDelete={handleDeleteBrand}
        onView={handleViewBrand}
      />
    );
  }
};

export default memo(BrandsTableCard);
