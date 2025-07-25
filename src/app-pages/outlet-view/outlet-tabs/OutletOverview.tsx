import OutletInformation from "@/components/card/outlet/OutletInformation";
import GridWrapper from "@/components/wrapper/GridWrapper";

const OutletOverview = () => {
  return (
    <GridWrapper className="grid-cols-1 sm:grid-cols-2 w-full border">
      <OutletInformation
        title="Basic Information"
        overViewData={OutletInformationStats}
      />
      <OutletInformation
        title="Location Operation"
        overViewData={OutletLocationInfo}
      />
    </GridWrapper>
  );
};

export default OutletOverview;

const OutletInformationStats = [
  { label: "Total Recipes", value: 120 },
  { label: "Total Suppliers", value: 35 },
  { label: "Total Ingredients", value: 410 },
  { label: "Total Categories", value: 18 },
];
const OutletLocationInfo = [
  { label: "Total Recipes", value: 120 },
  { label: "Total Suppliers", value: 35 },
  { label: "Total Ingredients", value: 410 },
  { label: "Total Categories", value: 18 },
];
