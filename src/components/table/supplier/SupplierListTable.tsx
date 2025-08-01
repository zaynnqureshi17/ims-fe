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
import { brandsIconPath } from "@/utils/PublicImageBaseUrl";
import Image from "next/image";

export type SuppliersDataProps = {
  id: number;
  profile_picture?: string;
  name: string;
  email: string;
  category: string;
  PIC: string;
  contact: string;
  service_area: string[];
  status: string;
};

interface InterfaceSupplierTable {
  UsersData: SuppliersDataProps[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const SupplierListTable = ({
  UsersData,
  headtable,
  onEdit,
  onDelete,
  onView,
}: InterfaceSupplierTable) => {
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
            <TableCell className="text-left text-gray">
              <span className="text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5">
                {item.category}
              </span>
            </TableCell>
            <TableCell>
              <div className="font-medium">{item.PIC}</div>
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.contact}
            </TableCell>
            <TableCell>
              {item.service_area.map((area) => {
                return (
                  <span
                    key={area}
                    className="mr-1 text-[#2563EB] bg-[#2563EB33] rounded-full p-1"
                  >
                    {area}
                  </span>
                );
              })}
            </TableCell>
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

export default SupplierListTable;
