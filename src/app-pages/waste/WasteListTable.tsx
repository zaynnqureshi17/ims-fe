"use client";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { useWasteContext } from "@/context/WasteContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import WasteTable from "./WasteTable";

const WasteListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { waste, loading } = useWasteContext();

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(waste);

  const handleEditWaste = (wasteId: number) => {
    navigate(ProtectedUrls.common.editWaste.replace(":id", String(wasteId)));
  };

  const handleDeleteWaste = (wasteId: number) => {};

  const handleViewWaste = (wasteId: number) => {
    navigate(ProtectedUrls.common.viewWaste.replace(":id", String(wasteId)));
  };

  console.log(waste);

  return (
    <SectionWrapper
      title="Recent Waste Entries"
      className="mt-4 !border-none  !bg-transparent !p-0"
    >
      <WasteTable
        waste={waste}
        onEdit={handleEditWaste}
        onDelete={handleDeleteWaste}
        onView={handleViewWaste}
      />
    </SectionWrapper>
  );
};

export default memo(WasteListTable);
