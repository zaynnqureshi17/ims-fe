"use client";
import BrandsListTable from "@/components/table/brand/BrandsListTable";
import { TableWrapper } from "@/components/wrapper/TableWrapper";
import { useState } from "react";

const BrandsTable = () => {
  const [page, setPage] = useState(1);
  return (
    <TableWrapper
      totalItems={12}
      currentPage={page}
      itemsPerPage={3}
      onPageChange={(page) => setPage(page)}
    >
      <BrandsListTable headtable={headtable} brandData={brandData} />
    </TableWrapper>
  );
};

export default BrandsTable;

const headtable = [
  "ID",
  "Brand Name",
  "Description",
  "Outlets",
  "Created Date",
  "Status",
  "Actions",
];

const brandData = [
  {
    id: "BRD001",
    brandName: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outlets: "2",
    status: "Active",
    createdDate: "2023-01-01",
  },
  {
    id: "BRD001",
    brandName: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outlets: "2",
    status: "Active",
    createdDate: "2023-01-01",
  },
  {
    id: "BRD001",
    brandName: "Pizza Palace",
    description: "Premium pizza chain with authentic Italian recipes",
    outlets: "2",
    status: "Active",
    createdDate: "2023-01-01",
  },
];
