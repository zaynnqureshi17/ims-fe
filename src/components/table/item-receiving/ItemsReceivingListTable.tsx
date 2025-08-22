import ActionButtons from "@/components/common/ActionButtons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IItem } from "@/utils/types/item.types";

interface InterfaceOutlet {
  ItemReceivingData: IItem[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const ItemsReceivingListTable = ({
  ItemReceivingData,
  headtable,
  onEdit,
  onDelete,
  onView,
}: InterfaceOutlet) => {
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
        {ItemReceivingData.map((item, index) => (
          <TableRow key={index} className="hover:bg-white  my-4">
            <TableCell className="text-gray">{item.item_id}</TableCell>
            <TableCell className="font-medium">{item.item_name}</TableCell>
            <TableCell className="text-left">{item.brand_name}</TableCell>
            <TableCell>
              <div className="text-gray">{item.sub_category_1}</div>
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.sub_category_1}
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.supplier_item_code}
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.unit_uom}
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.unit_price}
            </TableCell>
            <TableCell>
              <ActionButtons
                itemId={item.item_id}
                onEdit={onEdit}
                onDelete={onDelete}
                onView={onView}
              />{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ItemsReceivingListTable;
