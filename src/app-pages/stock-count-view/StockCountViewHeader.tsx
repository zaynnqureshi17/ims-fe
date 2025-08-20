"use client";

import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { Pencil, Trash2 } from "lucide-react";

const StockCountViewHeader = () => {
  const navigate = usePrefetchNavigate();
  const handleEditStorage = (storageId: number) => {
    navigate(
      ProtectedUrls.common.editStorage.replace(":id", storageId.toString()),
    );
  };
  const handleDeleteStorage = (storageId: number) => {
    console.log(`Delete storage action triggered for user ID: ${storageId}`);
    // Implement delete logic here
  };
  return (
    <div className="flex items-start justify-between px-6 py-4 rounded-md  bg-gradient-to-r from-[#2E1F60] to-[#2052C2] text-white">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Main Warehouse A.</h2>
        <div className="flex items-center gap-2">
          <span className="bg-yellow-300 text-black text-xs font-medium px-2 py-1 rounded-full">
            Supplier Code: SUP-2024-001
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="flex justify-end w-full gap-3">
          <Pencil
            className="w-4 h-4 cursor-pointer"
            onClick={() => handleEditStorage(1)}
          />
          <Trash2
            className="w-4 h-4 cursor-pointer"
            onClick={() => handleDeleteStorage(1)}
          />
        </div>
      </div>
    </div>
  );
};

export default StockCountViewHeader;
