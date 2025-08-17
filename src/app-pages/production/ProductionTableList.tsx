"use client";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import ProductionTable from "./ProductionTable";

export type ProductionStatus = "Completed" | "Pending" | "Failed" | "Draft";

export interface IProduction {
  id: number;
  dateTime: string;
  recipe: string;
  quantity: string;
  totalCost: string;
  producedBy: string;
  status: ProductionStatus;
}

const ProductionTableList: React.FC = () => {
  const navigate = usePrefetchNavigate();

  const handleEdit = (productionId: number) => {
    // adjust route when production edit page is ready
    navigate(
      ProtectedUrls.common.editRecipe.replace(":id", productionId.toString()),
    );
  };

  const handleDelete = (productionId: number) => {
    console.log("Deleting production with ID:", productionId);
  };

  const handleView = (productionId: number) => {
    // adjust route when production view page is ready
    navigate(
      ProtectedUrls.common.viewRecipe.replace(":id", productionId.toString()),
    );
  };

  return (
    <ProductionTable
      production={production}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onView={handleView}
    />
  );
};

export default memo(ProductionTableList);

const production: IProduction[] = [
  {
    id: 1,
    dateTime: "2024-01-15 14:30",
    recipe: "Pizza Margherita",
    quantity: "25 units",
    totalCost: "$212.50",
    producedBy: "John Smith",
    status: "Completed",
  },
  {
    id: 2,
    dateTime: "2024-01-15 14:30",
    recipe: "Pizza Margherita",
    quantity: "25 units",
    totalCost: "$212.50",
    producedBy: "John Smith",
    status: "Completed",
  },
  {
    id: 3,
    dateTime: "2024-01-15 14:30",
    recipe: "Pizza Margherita",
    quantity: "25 units",
    totalCost: "$212.50",
    producedBy: "John Smith",
    status: "Completed",
  },
  {
    id: 4,
    dateTime: "2024-01-15 14:30",
    recipe: "Pizza Margherita",
    quantity: "25 units",
    totalCost: "$212.50",
    producedBy: "John Smith",
    status: "Completed",
  },
  {
    id: 5,
    dateTime: "2024-01-15 14:30",
    recipe: "Pizza Margherita",
    quantity: "25 units",
    totalCost: "$212.50",
    producedBy: "John Smith",
    status: "Completed",
  },
];
