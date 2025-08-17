"use client";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React, { memo } from "react";
import SalesHistoryTable from "./SalesHistoryTable";

const SalesTable: React.FC = () => {
  const navigate = usePrefetchNavigate();

  const handleView = (id: number) => {
    navigate(ProtectedUrls.admin.viewBrand.replace(":id", id.toString()));
  };

  const handleEdit = (id: number) => {
    navigate(ProtectedUrls.admin.editBrand.replace(":id", id.toString()));
  };

  const handleDelete = (id: number) => {};

  const handleDownload = (id: number) => {};

  const sales = [
    {
      id: 1,
      date: "2023-01-01",
      file_name: "sales_report_2023_01_01.csv",
      status: "completed",
      records: 100,
      revenue: 1000,
      uploaded_by: "user1",
    },
    {
      id: 2,
      date: "2023-01-02",
      file_name: "sales_report_2023_01_02.csv",
      status: "pending",
      records: 200,
      revenue: 2000,
      uploaded_by: "user2",
    },
  ];

  return (
    <SalesHistoryTable
      sales={sales}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onView={handleView}
      onDownload={handleDownload}
    />
  );
};

export default memo(SalesTable);
