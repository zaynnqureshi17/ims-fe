import IconBg from "@/components/common/IconBg";
import StatWithIconCard, {
  StatWithIconCardProps,
} from "@/components/common/StatWithIconCard";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { outletsTabsIconPath } from "@/utils/PublicImageBaseUrl";
const OutletInventorySnapShot = () => {
  return (
    <GridWrapper className=" sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {OutletStat.map((stat, i) => (
        <StatWithIconCard key={i} {...stat} />
      ))}
    </GridWrapper>
  );
};

export default OutletInventorySnapShot;

export const OutletStat: StatWithIconCardProps[] = [
  {
    title: "Last Stock Count",
    value: "jan 15, 2023",
    icon: (
      <IconBg
        icon={`${outletsTabsIconPath}/cart.svg`}
        title="Last Stock Count"
        className="bg-icon-blue"
      />
    ),
  },
  {
    title: "Last Purchase Order",
    value: "jan 14, 2023",
    icon: (
      <IconBg
        icon={`${outletsTabsIconPath}/dollar.svg`}
        title="Last Purchase Order"
        className="bg-icon-purple"
      />
    ),
  },
  {
    title: "Last Weste Entry",
    value: "jan 12, 2023",
    icon: (
      <IconBg
        icon={`${outletsTabsIconPath}/delete.svg`}
        title="Last Weste Entry"
        className="bg-icon-green"
      />
    ),
  },
  {
    title: "Items Near Expiry",
    value: "12 items",
    icon: (
      <IconBg
        icon={`${outletsTabsIconPath}/expire.svg`}
        title="Items Near Expiry"
        className="bg-icon-yellow"
      />
    ),
  },
];
