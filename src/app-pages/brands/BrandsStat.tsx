import IconBg from "@/components/common/IconBg";
import BrandsStatWithIconCard, {
  BrandsStatWithIconCardProps,
} from "@/components/statistic/brands/BrandsStatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { brandsIconPath } from "@/utils/PublicImageBaseUrl";

const BrandsStat = () => (
  <GridWrapper className=" sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {BrandsStats.map((stat, i) => (
      <BrandsStatWithIconCard key={i} {...stat} />
    ))}
  </GridWrapper>
);

export default BrandsStat;
export const BrandsStats: BrandsStatWithIconCardProps[] = [
  {
    title: "Total Brands",
    value: "12",
    icon: (
      <IconBg
        icon={`${brandsIconPath}/total-brands.svg`}
        title="Total Brands"
        className="bg-icon-blue"
      />
    ),
  },
  {
    title: "Total Outlets",
    value: "156",
    icon: (
      <IconBg
        icon={`${brandsIconPath}/total-outlets.svg`}
        title="Total Outlets"
        className="bg-icon-purple"
      />
    ),
  },
  {
    title: "Active Brands",
    value: "11",
    icon: (
      <IconBg
        icon={`${brandsIconPath}/active-brands.svg`}
        title="Active Brands"
        className="bg-icon-green"
      />
    ),
  },
  {
    title: "Avg Outlets/Brand",
    value: "13",
    icon: (
      <IconBg
        icon={`${brandsIconPath}/avg-brands-outlets.svg`}
        title="Avg Outlets/Brand"
        className="bg-icon-yellow"
      />
    ),
  },
];
