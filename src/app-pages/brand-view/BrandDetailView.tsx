"use client";
import BrandViewCard from "@/components/card/brand/BrandViewCard";
import IconBg from "@/components/common/IconBg";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";

const BrandDetailView = () => {
  const navigate = usePrefetchNavigate();
  const handleEditBrand = (brandId: number) => {
    navigate(ProtectedUrls.admin.editBrand);
  };

  return (
    <BrandViewCard
      id={1}
      title="Pizza Palace"
      description="A premium pizza restaurant chain specializing in authentic Italian cuisine with fresh ingredients and traditional recipes. Operating across multiple locations with consistent quality and service standards."
      outletsCount={10}
      status="Active"
      name="Sarah Jones"
      date="2023-10-01"
      logo={
        <IconBg
          icon="/static/pizza.svg"
          title="Pizza Palace"
          width={40}
          height={40}
          className="bg-pagination-gray "
        />
      }
      onEdit={() => handleEditBrand(1)}
      onDelete={() => console.log("Delete brand action triggered")}
    />
  );
};

export default BrandDetailView;
