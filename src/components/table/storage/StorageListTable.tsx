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
import { IStorage } from "@/utils/types/storage.type";

interface InterfaceStorageTable {
  StockCountData: IStorage[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const StorageListTable = ({
  StockCountData,
  headtable,
  onEdit,
  onDelete,
  onView,
}: InterfaceStorageTable) => {
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
        {StockCountData.map((item, index) => (
          <TableRow key={index} className="hover:bg-white  my-4">
            <TableCell className="text-gray">{item.storage_id}</TableCell>
            <TableCell>
              <span>{item.storage_name}</span>
            </TableCell>
            <TableCell className="text-left text-gray">
              <span className="text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5">
                {item.outlet_name}
              </span>
            </TableCell>
            <TableCell>
              <div className="font-medium">{item.department}</div>
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.storage_description || "N/A"}
            </TableCell>
            <TableCell className="text-left">
              <StatusBadge status={item.status} />
            </TableCell>
            <TableCell>
              <ActionButtons
                itemId={item.storage_id}
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

export default StorageListTable;
