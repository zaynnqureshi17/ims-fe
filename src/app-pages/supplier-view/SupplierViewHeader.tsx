"use client";

import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import { Pencil, Trash2 } from "lucide-react";

const SupplierViewHeader = () => {
  const navigate = usePrefetchNavigate();
  const handleEditSupplier = (userId: number) => {
    navigate(
      ProtectedUrls.admin.editSupplier.replace(":id", userId.toString()),
    );
  };
  const handleDeleteSupplier = (userId: number) => {
    console.log(`Delete supplier action triggered for user ID: ${userId}`);
    // Implement delete logic here
  };
  return (
    <div className="flex items-center justify-between px-6 py-4 rounded-md  bg-gradient-to-r from-[#2E1F60] to-[#2052C2] text-white">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Marcus Johnson</h2>
        <div className="flex items-center gap-2">
          <span className="bg-yellow-300 text-black text-xs font-medium px-2 py-1 rounded-full">
            Manager
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
            Outlet: Karahi Express
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div className="flex justify-end w-full gap-3">
          <Pencil
            className="w-4 h-4 cursor-pointer"
            onClick={() => handleEditSupplier(1)}
          />
          <Trash2
            className="w-4 h-4 cursor-pointer"
            onClick={() => handleDeleteSupplier(1)}
          />
        </div>
      </div>
    </div>
  );
};

export default SupplierViewHeader;
