import BrandCardTable, {
  BrandCardTableProps,
} from "@/components/card/brand/BrandCardTable";
import IconBg from "@/components/common/IconBg";
import GridWrapper from "@/components/wrapper/GridWrapper";

const BrandsCard = ({ onEdit }: { onEdit: (id: number) => void }) => {
  return (
    <GridWrapper className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {BrandCardTableData.map((brand, index) => (
        <BrandCardTable
          id={brand.id}
          key={index}
          title={brand.title}
          description={brand.description}
          outletsCount={brand.outletsCount}
          status={brand.status}
          logo={brand.logo}
          onEdit={() => onEdit(brand.id)}
          onDelete={() => console.log("Delete clicked")}
        />
      ))}
    </GridWrapper>
  );
};

export default BrandsCard;

const BrandCardTableData: BrandCardTableProps[] = [
  {
    id: 1,
    title: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outletsCount: 10,
    status: "Active",
    logo: (
      <IconBg
        className=" bg-pagination-gray"
        icon="/static/pizza.svg"
        title="Pizza Palace"
        width={50}
        height={50}
      />
    ),
  },
  {
    id: 2,
    title: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outletsCount: 10,
    status: "Active",
    logo: (
      <IconBg
        className=" bg-pagination-gray"
        icon="/static/pizza.svg"
        title="Pizza Palace"
        width={50}
        height={50}
      />
    ),
  },
  {
    id: 3,
    title: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outletsCount: 10,
    status: "Active",
    logo: (
      <IconBg
        className=" bg-pagination-gray"
        icon="/static/pizza.svg"
        title="Pizza Palace"
        width={50}
        height={50}
      />
    ),
  },
  {
    id: 4,
    title: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outletsCount: 10,
    status: "Active",
    logo: (
      <IconBg
        className=" bg-pagination-gray"
        icon="/static/pizza.svg"
        title="Pizza Palace"
        width={50}
        height={50}
      />
    ),
  },
  {
    id: 5,
    title: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outletsCount: 10,
    status: "Active",
    logo: (
      <IconBg
        className=" bg-pagination-gray"
        icon="/static/pizza.svg"
        title="Pizza Palace"
        width={50}
        height={50}
      />
    ),
  },
  {
    id: 6,
    title: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outletsCount: 10,
    status: "Active",
    logo: (
      <IconBg
        className=" bg-pagination-gray"
        icon="/static/pizza.svg"
        title="Pizza Palace"
        width={50}
        height={50}
      />
    ),
  },
];
