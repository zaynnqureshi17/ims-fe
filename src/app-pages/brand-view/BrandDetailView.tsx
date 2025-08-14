"use client";
import BrandViewCard from "@/components/card/brand/BrandViewCard";
import { useBrandViewContext } from "@/context/BrandViewContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";

const BrandDetailView = () => {
  const navigate = usePrefetchNavigate();
  const { brandView } = useBrandViewContext();

  // Handling null or undefined brandView
  if (!brandView) {
    return <p>Loading brand details...</p>; // Show a loading message or a fallback UI
  }

  const handleEditBrand = (brandId: number) => {
    navigate(ProtectedUrls.admin.editBrand.replace(":id", brandId.toString()));
  };

  const handleDeleteBrand = (brandId: number) => {
    console.log("Delete brand action triggered");
  };

  return (
    <BrandViewCard
      brandViewData={brandView}
      onEdit={() => handleEditBrand(brandView?.brand_id)}
      onDelete={() => handleDeleteBrand(brandView?.brand_id)}
    />
  );
};

export default BrandDetailView;
