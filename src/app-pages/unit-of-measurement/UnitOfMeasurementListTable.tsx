"use client";
import { useUOMContext } from "@/context/uom.context";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import UnitOfMeasurementTable from "./UnitOfMeasurementTable";

const UnitOfMeasurementListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { uom, loading } = useUOMContext();
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEditUOM = (uomId: number) => {
    navigate(ProtectedUrls.admin.editUom.replace(":id", String(uomId)));
  };

  const handleDeleteUOM = () => {
    // TODO
    console.log("Delete UOM action triggered");
  };

  return (
    <UnitOfMeasurementTable
      uom={uom}
      onEdit={handleEditUOM}
      onDelete={handleDeleteUOM}
    />
  );
};

export default memo(UnitOfMeasurementListTable);
