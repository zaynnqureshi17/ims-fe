"use client";
import { useBrandViewContext } from "@/context/BrandViewContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import BrandViewOutletTable from "./BrandViewOutletTable";

const BrandViewTable = () => {
  const navigate = usePrefetchNavigate();
  const { brandView } = useBrandViewContext();

  const handleEditOutlet = (outletId: number) => {
    navigate(ProtectedUrls.admin.editOutlet.replace(":id", String(outletId)));
  };

  const handleDeleteOutlet = () => {
    // TODO
    console.log("Delete outlet action triggered");
  };

  const handleViewOutlet = (outletId: number) => {
    navigate(ProtectedUrls.admin.viewOutlet.replace(":id", String(outletId)));
  };
  return (
    <BrandViewOutletTable
      brandView={brandView}
      onEdit={handleEditOutlet}
      onDelete={handleDeleteOutlet}
      onView={handleViewOutlet}
    />
  );
};

export default BrandViewTable;
