import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectFieldProps = {
  label?: string;
  item: string[];
  placeholder: string;
  icon?: React.ReactNode;
};

const SelectField = ({ label, item, placeholder, icon }: SelectFieldProps) => {
  return (
    <div className="space-y-2 w-full bg-white rounded-md">
      {label && <Label htmlFor="select-field">{label}</Label>}
      <Select>
        <SelectTrigger
          id="select-field"
          className="w-full space-x-2"
        >
          <div className="flex justify-start items-center space-x-2">
          {icon && <span className="flex-none">{icon}</span>}
          <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        <SelectContent>
          {item.map((i) => (
            <SelectItem key={i} value={i} className="capitalize">
              {i}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;
