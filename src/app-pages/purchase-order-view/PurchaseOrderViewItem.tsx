import Loader from "@/components/common/loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IPurchaseOrderItem } from "@/utils/types/po.type";

type PurchaseOrderViewItemProps = {
  headtable: string[];
  POItem: IPurchaseOrderItem[];
  loading?: boolean;
};

const PurchaseOrderViewItem: React.FC<PurchaseOrderViewItemProps> = ({
  headtable,
  POItem,
  loading = false,
}) => {
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
        {loading ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <Loader />
                <p>Loading items...</p>
              </div>
            </TableCell>
          </TableRow>
        ) : POItem.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <p>No Item available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          POItem.map((item, index) => (
            <TableRow key={index} className="hover:bg-white my-4">
              <TableCell>{item.item.item_code}</TableCell>
              <TableCell>{item.item.item_name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.item.unit_uom}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.unit_price}</TableCell>
              <TableCell>{item.total_cost}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default PurchaseOrderViewItem;
