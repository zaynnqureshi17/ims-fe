"use client";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { brandsActions } from "@/utils/PublicImageBaseUrl";

type WasteRow = {
  id: string;
  date: string;
  item_id: number | null;
  item_name: string;
  transfer_qty: number;
  uom: string;
  reason: string;
  description: string;
  unit_cost: number;
  total_cost: number;
};

type WasteAddItemTableProps = {
  headtable: string[];
  wasteItem: WasteRow[];
  loading?: boolean;
  onDelete?: (itemId: string) => void;
  onChange?: (id: string, patch: Partial<WasteRow>) => void;
};

const currency = (n: number) =>
  new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(n || 0);

const WasteAddItemTable: React.FC<WasteAddItemTableProps> = ({
  headtable,
  wasteItem,
  loading = false,
  onDelete,
  onChange,
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
        ) : wasteItem.length === 0 ? (
          <TableRow>
            <TableCell colSpan={headtable?.length || 1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <p>No Item available</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          wasteItem.map((item) => (
            <TableRow key={item.id} className="hover:bg-white">
              <TableCell className="min-w-[140px]">
                <Input
                  type="date"
                  value={item.date}
                  onChange={(e) =>
                    onChange?.(item.id, { date: e.target.value })
                  }
                />
              </TableCell>

              <TableCell className="min-w-[180px]">
                <Select
                  value={item.item_name || ""}
                  onValueChange={(v) => onChange?.(item.id, { item_name: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tomatoes">Tomatoes</SelectItem>
                    <SelectItem value="Cheese">Cheese</SelectItem>
                    <SelectItem value="Bread">Bread</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>

              <TableCell className="min-w-[110px]">
                <Input
                  type="number"
                  step="0.01"
                  value={item.transfer_qty}
                  onChange={(e) =>
                    onChange?.(item.id, {
                      transfer_qty: Number(e.target.value),
                    })
                  }
                />
              </TableCell>

              <TableCell className="min-w-[140px]">
                <Select
                  value={item.uom || ""}
                  onValueChange={(v) => onChange?.(item.id, { uom: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg">kg</SelectItem>
                    <SelectItem value="g">g</SelectItem>
                    <SelectItem value="pcs">pcs</SelectItem>
                    <SelectItem value="ltr">ltr</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>

              <TableCell className="min-w-[160px]">
                <Select
                  value={item.reason || ""}
                  onValueChange={(v) => onChange?.(item.id, { reason: v })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="expired">Expired</SelectItem>
                    <SelectItem value="damaged">Damaged</SelectItem>
                    <SelectItem value="overcooked">Overcooked</SelectItem>
                    <SelectItem value="spillage">Spillage</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>

              <TableCell className="min-w-[220px]">
                <Input
                  placeholder="Optional Det."
                  value={item.description}
                  onChange={(e) =>
                    onChange?.(item.id, { description: e.target.value })
                  }
                />
              </TableCell>

              <TableCell className="min-w-[130px]">
                <Input
                  type="number"
                  step="0.01"
                  value={item.unit_cost}
                  onChange={(e) =>
                    onChange?.(item.id, { unit_cost: Number(e.target.value) })
                  }
                />
              </TableCell>

              <TableCell className="min-w-[130px] align-middle">
                <span className="text-sm">{currency(item.total_cost)}</span>
              </TableCell>

              <TableCell className="text-center flex justify-start items-center !py-4 gap-x-3">
                <IconBg
                  icon={`${brandsActions}delete-red.svg`}
                  title="Delete"
                  width={16}
                  height={16}
                  className="!p-0 cursor-pointer"
                  onClick={() => onDelete?.(item.id)}
                />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default WasteAddItemTable;
