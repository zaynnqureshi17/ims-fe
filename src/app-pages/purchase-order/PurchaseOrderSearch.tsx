import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
interface PurchaseOrderSearchProps {
  searchText: string;
  setSearchText: (val: string) => void;
  onSearch: (val: string) => void;
}
const PurchaseOrderSearch: React.FC<PurchaseOrderSearchProps> = ({
  searchText,
  setSearchText,
  onSearch,
}) => {
  return (
    <div className="relative w-full ">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 rounded-sm" />
      <Input
        placeholder="Search PO.."
        className="pl-10 bg-white"
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch(e.currentTarget.value);
        }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default PurchaseOrderSearch;
