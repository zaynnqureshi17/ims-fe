"use client";
import { IReport } from "@/app-pages/report/ReportPurchaseAnalytics";
import Loader from "@/components/common/loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ReportAnalyticTableProps {
  report: IReport[];
  headtable?: string[];
}

const ReportAnalyticTable = ({
  report,
  headtable,
}: ReportAnalyticTableProps) => {
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
        {report.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          report.map((item, index) => (
            <TableRow key={index} className="hover:bg-gray-50">
              {/* Recipe Name */}
              <TableCell className="min-w-[220px]">{item.ingredient}</TableCell>

              {/* Category pill */}
              <TableCell className="whitespace-nowrap">
                {item.avgPrice}
              </TableCell>

              {/* Ingredients Count */}
              <TableCell className="text-gray-600">
                {item.lowestPrice}
              </TableCell>

              {/* Cost */}
              <TableCell className="text-gray-900">
                {item.highestPrice}
              </TableCell>

              {/* Version */}
              <TableCell className="text-gray-600">{item.supplier}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default ReportAnalyticTable;
