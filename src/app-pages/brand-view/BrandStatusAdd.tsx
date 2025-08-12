import SelectField from "@/components/form/SelectField";
import React from "react";
interface BrandStatusAddProps {
  selectedStatus?: string;
  selectedRegion?: string;
  setSelectedStatus: (val: string) => void;
  handleUpdateQuery: (status?: string) => void;
}

const BrandStatusAdd: React.FC<BrandStatusAddProps> = ({
  selectedStatus,
  setSelectedStatus,
  handleUpdateQuery,
}) => {
  return (
    <SelectField
      placeholder="All Status"
      options={allStatus}
      value={selectedStatus}
      onValueChange={(val) => {
        setSelectedStatus(val);
        handleUpdateQuery(val);
      }}
    />
  );
};

export default BrandStatusAdd;

const allStatus = [
  { value: "all-status", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];
