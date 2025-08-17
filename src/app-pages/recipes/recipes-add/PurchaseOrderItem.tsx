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
    ingredient_name: string;
    quantity: number;
    uom: string;
    yield_percent: string;
    cost_per_unit: string;
    total_cost: string;
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
              <TableCell>{item.ingredient_name}</TableCell>
              <TableCell className="text-gray">{item.quantity}</TableCell>
              <TableCell className="text-left text-gray">{item.uom}</TableCell>
              <TableCell className="text-left text-gray">
                {item.yield_percent}
              </TableCell>
              <TableCell>{item.cost_per_unit}</TableCell>
              <TableCell className="text-left">{item.total_cost}</TableCell>
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
