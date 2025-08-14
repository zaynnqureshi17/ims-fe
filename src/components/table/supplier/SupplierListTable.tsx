import ActionButtons from "@/components/common/ActionButtons";
import StatusBadge from "@/components/common/StatusBadge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ISupplier } from "@/utils/types/supplier.type";
import { Loader } from "lucide-react";
import Image from "next/image";

interface InterfaceSupplierTable {
  supplierData: ISupplier[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const SupplierListTable = ({
  supplierData,
  headtable,
  onEdit,
  onDelete,
  onView,
}: InterfaceSupplierTable) => {
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
        {supplierData.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          supplierData.map((item, index) => (
            <TableRow key={index} className="hover:bg-white my-4">
              <TableCell className="text-gray">{item.supplier_id}</TableCell>
              <TableCell>
                <div className="flex justify-start gap-x-2">
                  <Image
                    src={item.supplier_image_url}
                    alt="Manager"
                    width={24}
                    height={24}
                    className="border size-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span>{item.supplier_code}</span>
                    <span className="text-gray">{item.email}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-left text-gray">
                <span className="text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5">
                  {item.category}
                </span>
              </TableCell>
              <TableCell>
                <div className="font-medium">{item.pic}</div>
              </TableCell>
              <TableCell className="text-left text-gray">
                {item.contact_number}
              </TableCell>
              <TableCell>
                {item.area_short.map((area: string) => (
                  <span
                    key={area}
                    className="mr-1 text-[#2563EB] bg-[#2563EB33] rounded-full p-1"
                  >
                    {area}
                  </span>
                ))}
              </TableCell>
              <TableCell className="text-left">
                <StatusBadge status={item.status} />
              </TableCell>
              <TableCell>
                <ActionButtons
                  itemId={item.supplier_id}
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

export default SupplierListTable;
