import IconBg from "@/components/common/IconBg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { brandsActions, brandsIconPath } from "@/utils/PublicImageBaseUrl";
import Image from "next/image";

export type UsersDataProps = {
  id: number;
  profile_picture?: string;
  name: string;
  email: string;
  role: string;
  outlet: string;
  department: string;
  created_date: string;
  status: string;
};

interface InterfaceUsers {
  UsersData: UsersDataProps[];
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
            <TableCell className="text-gray">{item.id}</TableCell>
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
            <TableCell className="text-left text-gray">{item.role}</TableCell>
            <TableCell>
              <div className="font-medium">{item.outlet}</div>
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.department}
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
            <TableCell className="text-center flex justify-start items-center !py-4 gap-x-3">
              <IconBg
                icon={`${brandsActions}edit.svg`}
                title="Edit"
                width={16}
                height={16}
                className="!p-0 cursor-pointer"
                onClick={() => onEdit(item.id)}
              />
              <IconBg
                icon={`${brandsActions}delete.svg`}
                title="Delete"
                width={16}
                height={16}
                className="!p-0 cursor-pointer"
                onClick={() => onDelete(item.id)}
              />
              <IconBg
                icon={`${brandsActions}view.svg`}
                title="View"
                width={16}
                height={16}
                className="!p-0 cursor-pointer"
                onClick={() => onView(item.id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersListTable;
