"use client";
import ActionButtons from "@/components/common/ActionButtons";
import Loader from "@/components/common/loader";
import ProductionBadge from "@/components/common/ProductionBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type ProductionStatus = "Completed" | "Pending" | "Failed" | "Draft";

export interface IProductionRow {
  id: number;
  dateTime: string;
  recipe: string;
  quantity: string;
  totalCost: string;
  producedBy: string;
  status: ProductionStatus;
}

interface ProductionListTableProps {
  production: IProductionRow[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const ProductionListTable = ({
  production,
  headtable,
  onEdit,
  onDelete,
  onView,
}: ProductionListTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headtable?.map((head, index) => (
            <TableHead key={index}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {production.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          production.map((item) => (
            <TableRow key={item.id} className="hover:bg-white">
              <TableCell className="text-gray-900">{item.dateTime}</TableCell>
              <TableCell className="min-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-orange-50 flex items-center justify-center">
                    <span className="text-lg">🍽️</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    {item.recipe}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-gray-600">{item.quantity}</TableCell>
              <TableCell className="text-gray-900">
                {item.totalCost.startsWith("$")
                  ? item.totalCost
                  : `$${item.totalCost}`}
              </TableCell>
              <TableCell className="text-gray-900">{item.producedBy}</TableCell>
              <TableCell>
                <ProductionBadge status={item.status} />
              </TableCell>
              <TableCell className="!py-4">
                <div className="flex items-center gap-x-3">
                  <ActionButtons
                    itemId={item.id}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onView={onView}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default ProductionListTable;
