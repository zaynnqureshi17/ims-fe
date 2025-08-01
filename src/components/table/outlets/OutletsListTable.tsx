import ActionButtons from "@/components/common/ActionButtons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type OutletDataProps = {
  id: number;
  outlets: string;
  location: string;
  brand_name?: string;
  created_date: string;
  status: string;
};

interface InterfaceOutlet {
  outletData: OutletDataProps[];
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
            <TableCell className="text-gray">{item.id}</TableCell>
            <TableCell className="font-medium">{item.outlets}</TableCell>
            <TableCell className="text-left text-gray">
              {item.location}
            </TableCell>
            <TableCell>
              <div className="font-medium">{item.brand_name}</div>
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.created_date}
            </TableCell>
            <TableCell className="text-left">
              <span
                className={`font-semibold ${
                  item.status === "Active"
                    ? "text-accent-green bg-accent-green-light rounded-full px-2 py-0.5"
                    : "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5"
                }`}
              >
                {item.status}
              </span>
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

export default OutletsListTable;
