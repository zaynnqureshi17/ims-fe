"use client";
import BrandViewCard from "@/components/card/brand/BrandViewCard";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { IBrand } from "@/utils/types/brand.type";
import { ProtectedUrls } from "@/utils/urls/urls";

const BrandDetailView = ({ brandData }: { brandData: IBrand }) => {
  const navigate = usePrefetchNavigate();
  const handleEditBrand = (brandId: number) => {
    navigate(ProtectedUrls.admin.editBrand.replace(":id", brandId.toString()));
  };

  return (
    <BrandViewCard
      brand_id={brandData.brand_id}
      brand_name={brandData.brand_name}
      description={brandData.description}
      status={brandData.status}
      created_at={brandData.created_at}
      logo={brandData.logo}
      onEdit={() => handleEditBrand(1)}
      onDelete={() => console.log("Delete brand action triggered")}
    />
  );
};

export default BrandDetailView;
