import OutletInformation from "@/components/card/outlet/OutletInformation";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useOutletContext } from "@/context/outlet.context";

const OutletOverview = () => {
  const { outletView } = useOutletContext();

  const outlet = outletView;

  const OutletInformationStats = [
    { label: "Outlet Code", value: outlet?.outlet_code || "N/A" },
    { label: "Outlet Name", value: outlet?.outlet_name || "N/A" },
    { label: "Company Name", value: outlet?.company_name || "N/A" },
    {
      label: "Registration Number",
      value: outlet?.company_registration_number || "N/A",
    },
    { label: "Finance Code", value: outlet?.finance_code || "N/A" },
    { label: "Assigned Brand", value: outlet?.brand_name || "N/A" },
  ];

  const OutletLocationInfo = [
    { label: "Street Address", value: outlet?.address_line || "N/A" },
    { label: "City", value: outlet?.city || "N/A" },
    { label: "State", value: outlet?.state || "N/A" },
    { label: "ZIP Code", value: outlet?.postal_code || "N/A" },
    { label: "Country", value: outlet?.country || "N/A" },
    {
      label: "Preferred Delivery Time",
      value: outlet?.preferred_delivery_hour || "N/A",
    },
  ];
  console.log(outlet);

  return (
    <GridWrapper className="grid-cols-1 sm:grid-cols-2 w-full border">
      <OutletInformation
        title="Basic Information"
        overViewData={OutletInformationStats}
      />
      <OutletInformation
        title="Location & Operations"
        overViewData={OutletLocationInfo}
      />
    </GridWrapper>
  );
};

export default OutletOverview;
