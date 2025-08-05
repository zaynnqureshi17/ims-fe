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

export type ItemReceivingDataProps = {
  id: number;
  item_name: string;
  brand_name: string;
  category_name: string;
  sub_category_name: string;
  supplier_name: string;
  purchase_uom: string;
  price: string;
  status: string;
};

interface InterfaceOutlet {
  ItemReceivingData: ItemReceivingDataProps[];
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
            <TableCell className="text-gray">{item.id}</TableCell>
            <TableCell className="font-medium">{item.item_name}</TableCell>
            <TableCell className="text-left">{item.brand_name}</TableCell>
            <TableCell>
              <div className="text-gray">{item.category_name}</div>
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.sub_category_name}
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.supplier_name}
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.purchase_uom}
            </TableCell>
            <TableCell className="text-left text-gray">{item.price}</TableCell>
            <TableCell className="text-left">
              <StatusBadge status={item.status} />
            </TableCell>
            <TableCell>
              <ActionButtons
                itemId={item.id}
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
