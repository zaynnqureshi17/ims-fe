import ActionButtons from "@/components/common/ActionButtons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IStockItem } from "@/utils/types/stock.count.type";

interface InterfaceStockCountTable {
  stockCount: IStockItem[];
  headtable?: string[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
}

const StockCountListTable = ({
  stockCount,
  headtable,
  onEdit,
  onDelete,
  onView,
}: InterfaceStockCountTable) => {
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
        {stockCount.map((item, index) => (
          <TableRow key={index} className="hover:bg-white my-2">
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.item_name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.storage_area}</TableCell>
            <TableCell>{item.full_units}</TableCell>
            <TableCell>{item.loose_units}</TableCell>
            <TableCell>{item.counted_quantity}</TableCell>
            <TableCell>{item.unit_price}</TableCell>
            {item.status && <TableCell>{item.status}</TableCell>}
            {
              <TableCell>
                <ActionButtons
                  itemId={index}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onView={onView}
                />
              </TableCell>
            }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StockCountListTable;
