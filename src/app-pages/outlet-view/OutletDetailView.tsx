"use client";
import OutletViewCard from "@/components/card/outlet/OutletViewCard";
import IconBg from "@/components/common/IconBg";

const OutletDetailView = () => {
  return (
    <OutletViewCard
      title="Karahi Express – D Ground"
      outletCode="OUT-FSD-001"
      status="Active"
      brand="karachi express"
      onEdit={() => console.log("Edit brand action triggered")}
      onDelete={() => console.log("Delete brand action triggered")}
    />
  );
};

export default OutletDetailView;
