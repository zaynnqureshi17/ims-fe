"use client";
import OutletViewCard from "@/components/card/outlet/OutletViewCard";
import IconBg from "@/components/common/IconBg";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";

const OutletDetailView = () => {
  const navigate = usePrefetchNavigate();
  const handleEditOutlet = (outletId: number) => {
    navigate(ProtectedUrls.admin.editOutlet);
  };

  const handleDeleteOutlet = () => {
    // TODO
    console.log("Delete outlet action triggered");
  };

  const handleViewOutlet = (outletId: number) => {
    navigate(ProtectedUrls.admin.viewOutlet);
  };
  return (
    <OutletViewCard
      title="Karahi Express – D Ground"
      outletCode="OUT-FSD-001"
      status="Active"
      brand="karachi express"
      onEdit={() => handleEditOutlet(1)}
      onDelete={() => handleDeleteOutlet()}
    />
  );
};

export default OutletDetailView;
