"use client";
import OutletViewCard from "@/components/card/outlet/OutletViewCard";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { IOutlet } from "@/utils/types/outlet.type";
import { ProtectedUrls } from "@/utils/urls/urls";

const OutletDetailView = ({ outletData }: { outletData: IOutlet }) => {
  const navigate = usePrefetchNavigate();
  const handleEditOutlet = (outletId: number) => {
    navigate(ProtectedUrls.admin.editOutlet);
  };

  const handleDeleteOutlet = () => {
    // TODO
    console.log("Delete outlet action triggered");
  };

  console.log(outletData);
  return (
    <OutletViewCard
      outlet_name={outletData.outlet_name}
      outlet_code={outletData.outlet_code}
      status={outletData.status}
      brand_name={outletData.brand_name}
      onEdit={() => handleEditOutlet(outletData.outlet_id)}
      onDelete={() => handleDeleteOutlet()}
    />
  );
};

export default OutletDetailView;
