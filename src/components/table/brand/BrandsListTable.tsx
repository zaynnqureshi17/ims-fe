import IconBg from "@/components/common/IconBg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { brandsActions } from "@/utils/PublicImageBaseUrl";

export type RecentPurchaseProps = {
  id: number;
  brandName: string;
  description: string;
  outlets: string;
  createdDate: string;
  status: string;
};

interface InterfaceRecentPurchase {
  brandData: RecentPurchaseProps[];
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const BrandsListTable = ({
  brandData,
  headtable,
  onEdit,
  onDelete,
  onView,
}: InterfaceRecentPurchase) => {
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
            <TableCell>{item.brandName}</TableCell>
            <TableCell className="text-left text-gray">
              {item.description}
            </TableCell>
            <TableCell>
              <div className="text-accent-orange bg-accent-orange-light w-fit px-2 py-1  rounded-full">
                {item.outlets}
              </div>
            </TableCell>
            <TableCell className="text-left text-gray">
              {item.createdDate}
            </TableCell>
            <TableCell className="text-left">
              <span
                className={`${
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

export default BrandsListTable;
