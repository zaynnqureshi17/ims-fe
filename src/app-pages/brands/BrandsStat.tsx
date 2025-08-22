"use client";
import IconBg from "@/components/common/IconBg";
import BrandsStatWithIconCard from "@/components/statistic/brands/BrandsStatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useGetSummaryBrand } from "@/queries/brands/useSummaryBrand.query";
import { brandsIconPath } from "@/utils/PublicImageBaseUrl";
import { useMemo } from "react";

const BrandsStat = () => {
  const { data: summaryData } = useGetSummaryBrand();
  console.log(summaryData);
  const brandSummary = summaryData?.body?.data || {};
  const BrandsStats = useMemo(
    () => [
      {
        title: "Total Brands",
        value: brandSummary.total_brand || 0,
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
        value: brandSummary.total_outlet || 0,
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
        value: brandSummary.active_brand || 0,
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
        value: brandSummary.average_brand_outlet || 0,
        icon: (
          <IconBg
            icon={`${brandsIconPath}/avg-brands-outlets.svg`}
            title="Avg Outlets/Brand"
            className="bg-icon-yellow"
          />
        ),
      },
    ],
    [brandSummary],
  );

  return (
    <GridWrapper className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {BrandsStats.map((stat, i) => (
        <BrandsStatWithIconCard key={i} {...stat} />
      ))}
    </GridWrapper>
  );
};

export default BrandsStat;
