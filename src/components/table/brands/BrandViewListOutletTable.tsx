import ActionButtons from "@/components/common/ActionButtons";
import Loader from "@/components/common/loader";
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
import { IBrandResponse } from "@/utils/types/brand.type";
import { IOutlet } from "@/utils/types/outlet.type";
import Image from "next/image";

interface BrandViewListOutletTableProps {
  brandOulletDataView: IBrandResponse | null; // Adjusted to a single IBrandResponse object
  headtable?: string[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onView: (id: number) => void;
}

const BrandViewListOutletTable = ({
  brandOulletDataView,
  headtable,
  onEdit,
  onDelete,
  onView,
}: BrandViewListOutletTableProps) => {
  console.log(brandOulletDataView?.outlets);
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
        {!brandOulletDataView?.outlets.length ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          brandOulletDataView?.outlets.map((item: IOutlet, index: number) => (
            <TableRow key={item.outlet_id} className="hover:bg-white my-4">
              <TableCell className="text-gray">{item.outlet_id}</TableCell>
              <TableCell>{item.outlet_name}</TableCell>{" "}
              <TableCell className="text-left text-gray">
                {item.city}, {item.state}, {item.country}{" "}
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
                  <div className="flex flex-col">
                    <span>{item.user?.role?.role_name ?? "N/A"}</span>
                    <span className="text-gray">
                      {item.user?.name ?? "N/A"}
                    </span>{" "}
                    {/* Corrected field name */}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-left flex flex-col">
                <span> N/A</span>
                <span className="text-gray">This Month</span>
              </TableCell>
              <TableCell className="text-left">
                <StatusBadge status={item.status} />
              </TableCell>
              <TableCell className="text-center flex justify-start items-center !py-4 gap-x-3">
                <ActionButtons
                  itemId={item.outlet_id}
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

export default BrandViewListOutletTable;
