import ActionButtons from "@/components/common/ActionButtons";
import StatusBadge from "@/components/common/StatusBadge";
import FormattedDate from "@/components/format-date/FormattedDate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IOutlet } from "@/utils/types/outlet.type";

interface InterfaceOutlet {
  outletData: IOutlet[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const OutletsListTable = ({
  outletData,
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
        {outletData.map((item, index) => (
          <TableRow key={index} className="hover:bg-white  my-4">
            <TableCell className="text-gray">{item.outlet_id}</TableCell>
            <TableCell className="font-medium">{item.outlet_name}</TableCell>
            <TableCell className="text-left text-gray">
              {item.country}, {item.state}, {item.city}
            </TableCell>
            <TableCell>
              <div className="font-medium">{item.brand_name}</div>
            </TableCell>
            <TableCell className="text-left text-gray">
              <FormattedDate date={item.created_at} />
            </TableCell>
            <TableCell className="text-left">
              <StatusBadge status={item.status} />
            </TableCell>
            <TableCell>
              <ActionButtons
                itemId={item.outlet_id}
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

export default OutletsListTable;
