// "use client";
// import BrandViewListOutletTable from "@/components/table/brands/BrandViewListOutletTable";
// import { TableWrapper } from "@/components/wrapper/TableWrapper";
// import { useState } from "react";

// interface OutletUserTabTableProps {
//   onEdit: (id: number) => void;
//   onDelete: (id: number) => void;
//   onView: (id: number) => void;
// }

// const OutletUserTabTable = ({
//   onEdit,
//   onDelete,
//   onView,
// }: OutletUserTabTableProps) => {
//   const [page, setPage] = useState(1);
//   return (
//     <TableWrapper
//       totalItems={12}
//       currentPage={page}
//       itemsPerPage={3}
//       onPageChange={(page) => setPage(page)}
//     >
//       <BrandViewListOutletTable
//         headtable={headtable}
//         brandData={[]}
//         onEdit={onEdit}
//         onDelete={onDelete}
//         onView={onView}
//       />
//     </TableWrapper>
//   );
// };

// export default OutletUserTabTable;

// const headtable = [
//   "ID",
//   "Outlet",
//   "Location",
//   "Manager",
//   "Performance",
//   "Status",
//   "Actions",
// ];
