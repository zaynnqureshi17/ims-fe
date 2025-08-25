"use client";
import ActionButtons from "@/components/common/ActionButtons";
import Loader from "@/components/common/loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITransfer } from "@/utils/types/transfer.type";

interface TransfersListTableProps {
  transfers: ITransfer[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const TransfersListTable = ({
  transfers,
  headtable,
  onEdit,
  onDelete,
  onView,
}: TransfersListTableProps) => {
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
        {transfers.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          transfers.map((item, index) => (
            <TableRow key={index} className="hover:bg-white">
              {/* Transfer ID */}
              <TableCell className="font-medium text-gray-900 whitespace-nowrap">
                {item.transfer_id}
              </TableCell>

              {/* From Outlet */}
              <TableCell className="text-gray-600">
                {item.sourceOutlet}
              </TableCell>

              {/* To Outlet */}
              <TableCell className="text-gray-600">
                {item.destinationOutlet}
              </TableCell>

              {/* Date */}
              <TableCell className="text-gray-600">{item.date}</TableCell>

              {/* Items */}
              <TableCell className="text-gray-600">{item.items}Items</TableCell>

              {/* Status Badge */}
              <TableCell>{item.status}</TableCell>

              {/* Actions */}
              <TableCell className="!py-4">
                <div className="flex items-center gap-x-3">
                  <ActionButtons
                    itemId={item.transfer_id} // using transfer_id from item
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

export default TransfersListTable;
