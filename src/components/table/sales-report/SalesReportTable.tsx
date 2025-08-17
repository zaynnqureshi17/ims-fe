"use client";
import ActionButtons from "@/components/common/ActionButtons";
import StatusBadge from "@/components/common/StatusBadge";
import Loader from "@/components/common/loader";
import FormattedDate from "@/components/format-date/FormattedDate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ISales } from "@/utils/types/sales.type";

interface SalesReportTableProps {
  sales: ISales[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
  onDownload: (id: number) => void;
}

const SalesReportTable = ({
  sales,
  headtable,
  onView,
  onDownload,
}: SalesReportTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headtable?.map((head, i) => (
            <TableHead key={i}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {sales.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          sales.map((item) => (
            <TableRow key={item.id} className="hover:bg-white">
              <TableCell className="text-gray-600 whitespace-nowrap">
                <FormattedDate date={item.date} />
              </TableCell>

              <TableCell className="font-medium text-gray-900">
                {item.file_name}
              </TableCell>

              <TableCell className="whitespace-nowrap">
                <StatusBadge status={item.status} />
              </TableCell>

              <TableCell className="text-gray-600">
                <FormattedDate date={item.date} />
              </TableCell>

              <TableCell className="text-gray-900">{item.revenue}</TableCell>

              <TableCell className="text-gray-900">
                {item.uploaded_by}
              </TableCell>

              <TableCell className="!py-4">
                <ActionButtons
                  onView={onView}
                  onDownload={onDownload}
                  itemId={item.id}
                />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default SalesReportTable;
