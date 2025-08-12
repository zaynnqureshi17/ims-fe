import ActionButtons from "@/components/common/ActionButtons";
import FormattedDate from "@/components/format-date/FormattedDate";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { brandsIconPath } from "@/utils/PublicImageBaseUrl";
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
        {UsersData.map((item, index) => (
          <TableRow key={index} className="hover:bg-white  my-4">
            <TableCell className="text-gray">{item.user_id}</TableCell>
            <TableCell>
              <div className="flex justify-start gap-x-2">
                <Image
                  src={`${brandsIconPath}/user.svg`}
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
                itemId={item.user_id}
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

export default UsersListTable;
