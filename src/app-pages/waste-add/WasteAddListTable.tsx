"use client";
import WasteListTable from "@/components/table/waste/WasteListTable";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { IWaste } from "@/utils/types/waste.type";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useState } from "react";

const WasteAddListTable = ({ waste }: { waste: IWaste[] }) => {
  const [page, setPage] = useState(1);
  const navigate = usePrefetchNavigate();

  const handleEditWaste = (wasteId: number) => {
    navigate(ProtectedUrls.common.editWaste.replace(":id", String(wasteId)));
  };

  const handleDeleteWaste = (wasteId: number) => {};

  const handleViewWaste = (wasteId: number) => {
    navigate(ProtectedUrls.common.viewUser.replace(":id", String(wasteId)));
  };

  const headtable = [
    "Date",
    "Item",
    "Qty",
    "Unit Cost",
    "Total Cost",
    "reason",
    "Actions",
  ];

  return (
    <SectionWrapper
      title="Recent Waste Entries"
      className="mt-4 !border-none  !bg-transparent !p-0"
    >
      <TableWrapper
        totalItems={waste.length > 0 ? waste.length : 0}
        currentPage={page}
        itemsPerPage={3}
        onPageChange={(page) => setPage(page)}
      >
        <WasteListTable
          headtable={headtable}
          WasteData={waste}
          onEdit={handleEditWaste}
          onDelete={handleDeleteWaste}
          onView={handleViewWaste}
        />
      </TableWrapper>
    </SectionWrapper>
  );
};

export default WasteAddListTable;
