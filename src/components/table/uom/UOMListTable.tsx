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

export type UOMDataProps = {
  id: number;
  UOM: string;
  category: string;
  quantity: number;
  base_UOM: string;
  status: string;
};

interface InterfaceOutlet {
  UOMData: UOMDataProps[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const UOMListTable = ({
  UOMData,
  headtable,
  onEdit,
  onDelete,
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
        {UOMData.map((item, index) => (
          <TableRow key={index} className="hover:bg-white  my-4">
            <TableCell className="text-gray">{item.id}</TableCell>
            <TableCell className="">{item.UOM}</TableCell>
            <TableCell className="text-left ">{item.category}</TableCell>
            <TableCell>
              <span className="text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5">
                {item.quantity}
              </span>
            </TableCell>
            <TableCell className="text-left">{item.base_UOM}</TableCell>
            <TableCell className="text-left">
              <StatusBadge status={item.status} />
            </TableCell>
            <TableCell className="">
              <ActionButtons
                itemId={item.id}
                onEdit={onEdit}
                onDelete={onDelete}
              />{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UOMListTable;
