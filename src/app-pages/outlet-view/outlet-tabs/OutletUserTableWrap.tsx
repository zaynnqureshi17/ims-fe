"use client";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import BrandViewOutletTable from "./OutletUserTabTable";

const OutletUserTableWrap = () => {
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

  const handleViewOutlet = (outletId: number) => {
    navigate(
      ProtectedUrls.admin.viewOutlet.replace(":id", outletId.toString()),
    );
  };
  return (
    <BrandViewOutletTable
      onEdit={handleEditOutlet}
      onDelete={handleDeleteOutlet}
      onView={handleViewOutlet}
    />
  );
};

export default OutletUserTableWrap;
