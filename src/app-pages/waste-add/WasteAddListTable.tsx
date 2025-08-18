"use client";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { IWaste } from "@/utils/types/waste.type";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import WasteAddTable from "./WasteAddTable";

const WasteAddListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();

  const handleEditUser = (userId: number) => {
    navigate(ProtectedUrls.common.editUser.replace(":id", String(userId)));
  };

  const handleDeleteUser = (userId: number) => {};

  const handleViewUser = (userId: number) => {
    navigate(ProtectedUrls.common.viewUser.replace(":id", String(userId)));
  };

  return (
    <SectionWrapper
      title="Recent Waste Entries"
      className="mt-4 !border-none  !bg-transparent !p-0"
    >
      <WasteAddTable
        waste={waste}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
        onView={handleViewUser}
      />
    </SectionWrapper>
  );
};

export default memo(WasteAddListTable);
const waste: IWaste[] = [
  {
    waste_id: 1,
    date: "2024-01-15",
    item: "Fresh Salmon Fillet",
    category: "Seafood",
    qty: "2.5 kg",
    unit_cost: 24.6,
    total_value: 60,
    reason: "Expired",
    staff: "John Smith",
  },
  {
    waste_id: 2,
    date: "2024-01-15",
    item: "Fresh Salmon Fillet",
    category: "Seafood",
    qty: "2.5 kg",
    unit_cost: 24.6,
    total_value: 60,
    reason: "Expired",
    staff: "John Smith",
  },
  {
    waste_id: 3,
    date: "2024-01-15",
    item: "Fresh Salmon Fillet",
    category: "Seafood",
    qty: "2.5 kg",
    unit_cost: 24.6,
    total_value: 60,
    reason: "Damaged",
    staff: "John Smith",
  },
  {
    waste_id: 4,
    date: "2024-01-15",
    item: "Fresh Salmon Fillet",
    category: "Seafood",
    qty: "2.5 kg",
    unit_cost: 24.6,
    total_value: 60,
    reason: "Overproduction",
    staff: "John Smith",
  },
  {
    waste_id: 5,
    date: "2024-01-15",
    item: "Fresh Salmon Fillet",
    category: "Seafood",
    qty: "2.5 kg",
    unit_cost: 24.6,
    total_value: 60,
    reason: "Spillage",
    staff: "John Smith",
  },
];
