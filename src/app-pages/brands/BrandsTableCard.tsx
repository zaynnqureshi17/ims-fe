"use client";
import { useBrandContext } from "@/context/BrandContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { useDeleteBrand } from "@/queries/brands/useDeleteBrand.query";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";
import BrandsTable from "./BrandsTable";

const BrandsTableCard: React.FC = () => {
  const [collapsed, setCollapsed] = useState<string>("list");
  const navigate = usePrefetchNavigate();
  const searchParams = useSearchParams();
  const { brand, loading } = useBrandContext();
  const { mutate: deleteBrand } = useDeleteBrand();

  // Initialize the collapsed state based on the search parameters
  useEffect(() => {
    const isCollapsed = searchParams.get("collapsed") || "list";
    setCollapsed(isCollapsed);
  }, [searchParams]);

  const handleEditBrand = (brandId: number) => {
    navigate(ProtectedUrls.admin.editBrand.replace(":id", brandId.toString()));
  };

  const handleDeleteBrand = (brandId: number) => {
    deleteBrand({
      id: brandId,
    });
  };
  const handleViewBrand = (brandId: number) => {
    navigate(ProtectedUrls.admin.viewBrand.replace(":id", brandId.toString()));
  };

  if (collapsed === "grid") {
    return <BrandsCard brand={brand} onEdit={handleEditBrand} />;
  }
  if (collapsed === "list") {
    return (
      <BrandsTable
        brand={brand}
        onEdit={handleEditBrand}
        onDelete={handleDeleteBrand}
        onView={handleViewBrand}
      />
    );
  }
};

export default memo(BrandsTableCard);
