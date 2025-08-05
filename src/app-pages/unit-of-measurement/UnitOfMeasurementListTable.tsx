"use client";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import UnitOfMeasurementTable from "./UnitOfMeasurementTable";

const UnitOfMeasurementListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();

  const handleEditUOM = (uomId: number) => {
    navigate(
      ProtectedUrls.common.editItemReceiving.replace(":id", String(uomId)),
    );
  };

  const handleDeleteUOM = () => {
    // TODO
    console.log("Delete UOM action triggered");
  };

  return (
    <UnitOfMeasurementTable onEdit={handleEditUOM} onDelete={handleDeleteUOM} />
  );
};

export default memo(UnitOfMeasurementListTable);
