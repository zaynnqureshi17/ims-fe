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
import { IBrand } from "@/utils/types/brand.type";

interface InterfaceRecentPurchase {
  brandData: IBrand[];
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
  console.log(brandData);
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
        {brandData.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center  gap-4 ">
                <Loader />
                <p>No data available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          brandData.map((item, index) => (
            <TableRow key={index} className="hover:bg-white  my-4">
              <TableCell className="text-gray">{item.brand_id}</TableCell>
              <TableCell>{item.brand_name}</TableCell>
              <TableCell className="text-left text-gray">
                {item.description}
              </TableCell>
              <TableCell>
                <div className="text-accent-orange bg-accent-orange-light w-fit px-2 py-1  rounded-full">
                  {item.outlet_count}
                </div>
              </TableCell>
              <TableCell className="text-left text-gray">
                <FormattedDate date={item.created_at} />
              </TableCell>
              <TableCell className="text-left">
                <StatusBadge status={item.status} />
              </TableCell>
              <TableCell className="text-center flex justify-start items-center !py-4 gap-x-3">
                <ActionButtons
                  itemId={item.brand_id}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onView={onView}
                />{" "}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default BrandsListTable;
