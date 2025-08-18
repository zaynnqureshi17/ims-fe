"use client";
import ActionButtons from "@/components/common/ActionButtons";
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
import { IWaste } from "@/utils/types/waste.type";

interface InterfaceWaste {
  WasteData: IWaste[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const currency = (n: number) =>
  n.toLocaleString(undefined, { style: "currency", currency: "USD" });

const reasonClass: Record<NonNullable<IWaste["reason"]>, string> = {
  Expired: "bg-rose-100 text-rose-700",
  Damaged: "bg-orange-100 text-orange-700",
  Overproduction: "bg-violet-100 text-violet-700",
  Spillage: "bg-sky-100 text-sky-700",
};

const WasteListTable = ({
  WasteData,
  headtable,
  onEdit,
  onDelete,
  onView,
}: InterfaceWaste) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headtable &&
            headtable.map((head, index) => (
              <TableHead key={index}>{head}</TableHead>
            ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {WasteData.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4 py-6">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          WasteData.map((item, index) => (
            <TableRow key={index} className="hover:bg-white">
              <TableCell className="text-gray">
                <FormattedDate date={item.date} />
              </TableCell>

              <TableCell>{item.item}</TableCell>

              <TableCell className="text-gray">{item.category}</TableCell>

              <TableCell className="text-gray">{item.qty}</TableCell>

              <TableCell>{currency(item.unit_cost)}</TableCell>

              <TableCell className="text-red-500 font-medium">
                {currency(item.total_value)}
              </TableCell>

              <TableCell>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${reasonClass[item.reason]}`}
                >
                  {item.reason}
                </span>
              </TableCell>

              <TableCell>
                <span>{item.staff}</span>
              </TableCell>

              <TableCell>
                <ActionButtons
                  itemId={item.waste_id}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onView={onView}
                />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default WasteListTable;
