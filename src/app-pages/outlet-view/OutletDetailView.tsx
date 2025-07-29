"use client";
import OutletViewCard from "@/components/card/outlet/OutletViewCard";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";

const OutletDetailView = () => {
  const navigate = usePrefetchNavigate();
  const handleEditOutlet = (outletId: number) => {
    // Navigate to edit outlet page
    navigate(ProtectedUrls.admin.editOutlet.replace(":id", String(outletId)));
  };
  return (
    <OutletViewCard
      title="Karahi Express – D Ground"
      outletCode="OUT-FSD-001"
      status="Active"
      brand="karachi express"
      onEdit={() => handleEditOutlet(1)}
      onDelete={() => console.log("Delete brand action triggered")}
    />
  );
};

export default OutletDetailView;
