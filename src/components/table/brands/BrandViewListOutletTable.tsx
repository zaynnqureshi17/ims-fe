import ActionButtons from "@/components/common/ActionButtons";
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

export type BrandViewListOutletPropsTable = {
  id: number;
  outlets: string;
  location: string;
  manager: string;
  email: string;
  performance: string;
  status: string;
  createdDate: string;
};

interface BrandViewListOutletTableProps {
  brandData: BrandViewListOutletPropsTable[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const BrandViewListOutletTable = ({
  brandData,
  headtable,
  onEdit,
  onDelete,
  onView,
}: BrandViewListOutletTableProps) => {
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
        {brandData.map((item, index) => (
          <TableRow key={index} className="hover:bg-white  my-4">
            <TableCell className="text-gray">{item.id}</TableCell>
            <TableCell>{item.outlets}</TableCell>
            <TableCell className="text-left text-gray">
              {item.location}
            </TableCell>
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
                  <span>{item.manager}</span>
                  <span className="text-gray">{item.email}</span>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-left flex flex-col ">
              <span>${item.performance}</span>
              <span className="text-gray">This Month</span>
            </TableCell>
            <TableCell className="text-left">
              <span
                className={`font-medium text-sm ${
                  item.status === "Active"
                    ? "text-accent-green bg-accent-green-light rounded-full px-2 py-0.5"
                    : "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5"
                }`}
              >
                {item.status}
              </span>
            </TableCell>
            <TableCell className="text-center flex justify-start items-center !py-4 gap-x-3">
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

export default BrandViewListOutletTable;
