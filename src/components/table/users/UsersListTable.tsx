import ActionButtons from "@/components/common/ActionButtons";
import Loader from "@/components/common/loader";
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
import { IUser } from "@/utils/types/user.type";
import Image from "next/image";

interface InterfaceUsers {
  UsersData: IUser[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const UsersListTable = ({
  UsersData,
  headtable,
  onEdit,
  onDelete,
  onView,
}: InterfaceUsers) => {
  return (
    <Table className="border-separate border-spacing-x-4 border-spacing-y-2">
      <TableHeader>
        <TableRow>
          {headtable &&
            headtable.map((head, index) => (
              <TableHead key={index}>{head}</TableHead>
            ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {UsersData.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4 py-6">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          UsersData.map((item, index) => (
            <TableRow key={index} className="hover:bg-white my-4">
              <TableCell className="text-gray">{item.user_id}</TableCell>
              <TableCell>
                <div className="flex justify-start gap-x-2">
                  <Image
                    src={item.user_image_url}
                    alt="Manager"
                    width={24}
                    height={24}
                    className="border size-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col ">
                    <span>{item.name}</span>
                    <span className="text-gray">{item.email}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-left text-gray">
                {item.role_name || "N/A"}
              </TableCell>
              <TableCell className="text-left text-gray">
                {item.brand_name || "N/A"}
              </TableCell>
              <TableCell>
                <div className="font-medium">{item.outlet_name || "N/A"}</div>
              </TableCell>
              <TableCell className="text-left text-gray">
                {item.department_name || "N/A"}
              </TableCell>
              <TableCell className="text-left text-gray">
                <FormattedDate date={item.created_at} />
              </TableCell>
              <TableCell className="text-left">
                <StatusBadge status={item.status} />
              </TableCell>
              <TableCell>
                <ActionButtons
                  itemId={item.user_id}
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

export default UsersListTable;
