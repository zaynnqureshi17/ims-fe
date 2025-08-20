"use client";
import { useStockContext } from "@/context/StockCountContext";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { IStockItem } from "@/utils/types/stock.count.type";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import StockCountTable from "./StockCountTable";

const StockCountListTable: React.FC = () => {
  const navigate = usePrefetchNavigate();
  const { stock, loading } = useStockContext();

  const handleEditStockCount = (userId: number) => {
    navigate(
      ProtectedUrls.common.editStockCount.replace(":id", String(userId)),
    );
  };

  const handleDeleteStockCount = () => {
    // TODO
    console.log("Delete Stock Count action triggered");
  };

  const handleViewStockCount = (userId: number) => {
    navigate(
      ProtectedUrls.common.viewStockCount.replace(":id", String(userId)),
    );
  };

  return (
    <StockCountTable
      onEdit={handleEditStockCount}
      onDelete={handleDeleteStockCount}
      onView={handleViewStockCount}
      stockCount={stockData}
    />
  );
};

export default memo(StockCountListTable);

const stockData: IStockItem[] = [
  {
    id: 1,
    item_name: "Fresh Tomatoes",
    category: "Vegetables",
    storage_area: "Cold Storage",
    full_price: "12.00",
    full_units: "12 kg",
    loose_units: "2.5 kg",
    counted_quantity: "14.5 kg",
    unit_price: "$18.50",
    note_count: "No issues noted",
    status: "Draft",
    created_at: new Date("2025-08-01"),
    updated_at: new Date("2025-08-10"),
  },
  {
    id: 2,
    item_name: "Chicken Breast",
    category: "Meat",
    storage_area: "Freezer",
    full_price: "15.00",
    full_units: "12 kg",
    loose_units: "2.5 kg",
    counted_quantity: "14.5 kg",
    unit_price: "$18.50",
    note_count: "Verified with supplier invoice",
    status: "Completed",
    created_at: new Date("2025-08-02"),
    updated_at: new Date("2025-08-10"),
  },
  {
    id: 3,
    item_name: "Mozzarella Cheese",
    category: "Vegetables",
    storage_area: "Cold Storage",
    full_price: "22.00",
    full_units: "12 kg",
    loose_units: "2.5 kg",
    counted_quantity: "14.5 kg",
    unit_price: "$18.50",
    note_count: "Slight packaging damage observed",
    status: "Approved",
    created_at: new Date("2025-08-03"),
    updated_at: new Date("2025-08-11"),
  },
  {
    id: 4,
    item_name: "Fresh Tomatoes",
    category: "Vegetables",
    storage_area: "Cold Storage",
    full_price: "12.00",
    full_units: "12 kg",
    loose_units: "2.5 kg",
    counted_quantity: "14.5 kg",
    unit_price: "$18.50",
    note_count: "Second batch stock count",
    status: "Draft",
    created_at: new Date("2025-08-04"),
    updated_at: new Date("2025-08-12"),
  },
];
