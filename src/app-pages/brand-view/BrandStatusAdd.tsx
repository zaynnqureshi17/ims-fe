import SelectField from "@/components/form/SelectField";
import { AllStatus } from "@/constant/status";
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
      options={AllStatus}
      value={selectedStatus}
      onValueChange={(val) => {
        setSelectedStatus(val);
        handleUpdateQuery(val);
      }}
    />
  );
};

export default BrandStatusAdd;
