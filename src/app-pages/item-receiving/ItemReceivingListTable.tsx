"use client";
import { useItemContext } from "@/context/ItemContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import ItemReceivingTable from "./ItemReceivingTable";

const ItemReceivingListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { item, loading } = useItemContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleEditUOM = (uomId: number) => {
    navigate(
      ProtectedUrls.common.editItemReceiving.replace(":id", String(uomId)),
    );
  };

  const handleDeleteUOM = () => {
    // TODO
    console.log("Delete UOM action triggered");
  };

  const handleViewUOM = (uomId: number) => {
    navigate(
      ProtectedUrls.common.viewItemReceiving.replace(":id", String(uomId)),
    );
  };
  console.log(item);

  return (
    <ItemReceivingTable
      item={item}
      onEdit={handleEditUOM}
      onDelete={handleDeleteUOM}
      onView={handleViewUOM}
    />
  );
};

export default memo(ItemReceivingListTable);
