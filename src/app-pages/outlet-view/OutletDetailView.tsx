"use client";
import OutletViewCard from "@/components/card/outlet/OutletViewCard";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";

const OutletDetailView = () => {
  const navigate = usePrefetchNavigate();
  const handleEditOutlet = (outletId: number) => {
    navigate(
      ProtectedUrls.admin.editOutlet.replace(":id", outletId.toString()),
    );
  };

  const handleDeleteOutlet = () => {
    // TODO
    console.log("Delete outlet action triggered");
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
