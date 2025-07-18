import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectField = ({ label,item }: { label: string, item: string[] }) => {
  return (
    <div className="space-y-2">
      {label && <Label htmlFor="brand">{label}</Label>}
      <Select>
        <SelectTrigger id="brand" className="w-full">
          <SelectValue placeholder="All Brands" />
        </SelectTrigger>
        <SelectContent>
          {item.map((i) => (
            <SelectItem key={i} value={i}>
              {i}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;
