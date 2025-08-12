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
import { IUOM } from "@/utils/types/uom.type";

interface InterfaceOutlet {
  UOMData: IUOM[];
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
            <TableCell className="text-gray">{item.preset_uom_id}</TableCell>
            <TableCell className="">{item.uom}</TableCell>
            <TableCell className="text-left ">{item.for_category}</TableCell>
            <TableCell>
              <span className="text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5">
                {item.quantity}
              </span>
            </TableCell>
            <TableCell className="text-left">{item.baseUOM}</TableCell>
            <TableCell className="text-left">
              <StatusBadge status={item.status} />
            </TableCell>
            <TableCell className="">
              <ActionButtons
                itemId={item.preset_uom_id}
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
