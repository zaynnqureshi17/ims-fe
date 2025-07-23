import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type RecentPurchaseProps = {
  date: string;
  supplier: string;
  amount: number;
  status: string;
};

interface InterfaceRecentPurchase {
  recentPurchases: RecentPurchaseProps[];
  headtable?: string[];
}

const FinanceManagerRecentPurchaseTable = ({
  recentPurchases,
  headtable,
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
        {recentPurchases.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.date}</TableCell>
            <TableCell>{item.supplier}</TableCell>
            <TableCell className="text-left">{item.amount}</TableCell>
            <TableCell className="text-left">{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FinanceManagerRecentPurchaseTable;
