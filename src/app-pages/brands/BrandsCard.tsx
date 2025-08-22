import BrandCardTable from "@/components/card/brand/BrandCardTable";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { IBrand } from "@/utils/types/brand.type";

interface BrandsCardProps {
  brand: IBrand[];

  onEdit: (brand_id: number) => void;
  onDelete: (brand_id: number) => void;
}

const BrandsCard = ({ brand, onEdit, onDelete }: BrandsCardProps) => {
  return (
    <GridWrapper className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {brand.map((brand: IBrand) => (
        <BrandCardTable
          brand={brand}
          onEdit={() => onEdit(brand.brand_id)}
          onDelete={() => onDelete(brand.brand_id)}
        />
      ))}
    </GridWrapper>
  );
};

export default BrandsCard;
