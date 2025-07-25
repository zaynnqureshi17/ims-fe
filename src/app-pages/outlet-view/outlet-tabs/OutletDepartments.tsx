import StatWithIconCard, {
  StatWithIconCardProps,
} from "@/components/common/StatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { outletsTabsIconPath } from "@/utils/PublicImageBaseUrl";
import Image from "next/image";

const OutletDepartments = () => {
  return (
    <GridWrapper className=" sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {OutletStat.map((stat, i) => (
        <StatWithIconCard
          key={i}
          {...stat}
          classNameTitle="text-lg font-medium text-supporting-black"
          classNameValue="text-sm text-gray"
        />
      ))}
    </GridWrapper>
  );
};

export default OutletDepartments;

export const OutletStat: StatWithIconCardProps[] = [
  {
    title: "Kitchen",
    value: "jan 15, 2023",
    icon: (
      <Image
        src={`${outletsTabsIconPath}/kitchen.svg`}
        alt="Kitchen"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Bar",
    value: "jan 14, 2023",
    icon: (
      <Image
        src={`${outletsTabsIconPath}/bar.svg`}
        alt="Bar"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Floor",
    value: "jan 12, 2023",
    icon: (
      <Image
        src={`${outletsTabsIconPath}/floor.svg`}
        alt="Floor"
        width={24}
        height={24}
      />
    ),
  },
];
