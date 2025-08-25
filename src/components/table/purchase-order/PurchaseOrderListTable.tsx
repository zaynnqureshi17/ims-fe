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
import { IPurchaseOrder } from "@/utils/types/po.type";

interface InterfaceRecentPurchase {
  purchaseOrder: IPurchaseOrder[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const PurchaseOrderListTable = ({
  purchaseOrder,
  headtable,
  onEdit,
  onDelete,
  onView,
}: InterfaceRecentPurchase) => {
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
        {purchaseOrder.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          purchaseOrder.map((item, index) => (
            <TableRow key={index} className="hover:bg-white my-4">
              {/* Show PO Number */}
              <TableCell className="text-gray">{item.po_number}</TableCell>

              {/* Supplier */}
              <TableCell>{item.po_supplier.company_name}</TableCell>

              {/* Items list */}
              <TableCell className="text-left text-gray">
                {item.items} Items
              </TableCell>

              {/* Order Date */}
              <TableCell className="text-left text-gray">
                <FormattedDate date={item.order_date} />
              </TableCell>

              {/* Action buttons */}
              <TableCell className="text-center flex justify-start items-center !py-4 gap-x-3">
                <ActionButtons
                  itemId={item.po_id}
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

export default PurchaseOrderListTable;
