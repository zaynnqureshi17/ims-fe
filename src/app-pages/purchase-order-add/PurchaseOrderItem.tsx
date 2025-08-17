import IconBg from "@/components/common/IconBg";
import Loader from "@/components/common/loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { brandsActions } from "@/utils/PublicImageBaseUrl";

type PurchaseOrderItemProps = {
  headtable: string[];
  POItem: Array<{
    item_id: number;
    unit: string;
    quantity: number;
    item_name: string;
    unit_price: string;
    total: string;
  }>;
  onDelete?: (itemId: number) => void;
  loading?: boolean;
};

const PurchaseOrderItem: React.FC<PurchaseOrderItemProps> = ({
  headtable,
  POItem,
  loading = false,
  onDelete,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headtable?.map((head, index) => (
            <TableHead key={index}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <Loader />
                <p>Loading items...</p>
              </div>
            </TableCell>
          </TableRow>
        ) : POItem.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <p>No Item available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          POItem.map((item, index) => (
            <TableRow key={index} className="hover:bg-white my-4">
              <TableCell>{item.item_name}</TableCell>
              <TableCell className="text-gray">{item.unit}</TableCell>
              <TableCell className="text-left text-gray">
                {item.quantity}
              </TableCell>
              <TableCell>{item.unit_price}</TableCell>
              <TableCell className="text-left">{item.total}</TableCell>
              <TableCell className="text-center flex justify-start items-center !py-4 gap-x-3">
                <IconBg
                  icon={`${brandsActions}delete-red.svg`}
                  title="Delete"
                  width={16}
                  height={16}
                  className="!p-0 cursor-pointer"
                  onClick={() => onDelete?.(item.item_id)}
                />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default PurchaseOrderItem;
