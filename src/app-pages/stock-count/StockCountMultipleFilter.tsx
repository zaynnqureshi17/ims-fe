import SelectField from "@/components/form/Select";
import React from "react";
interface StockCountMultipleFilterProps {
  selectedBrand: string;
  selectedStatus: string;
  selectedDepartment: string;
  selectedOutlet: string;
  setSelectedOutlet: (val: string) => void;
  setSelectedBrand: (val: string) => void;
  setSelectedStatus: (val: string) => void;
  setSelectedDepartment: (val: string) => void;
  handleUpdateQuery: (
    brand: string,
    outlet: string,
    department: string,
    status: string,
  ) => void;
}

const StockCountMultipleFilter: React.FC<StockCountMultipleFilterProps> = ({
  selectedBrand,
  selectedStatus,
  selectedDepartment,
  selectedOutlet,
  setSelectedOutlet,
  setSelectedBrand,
  setSelectedStatus,
  setSelectedDepartment,
  handleUpdateQuery,
}) => {
  return (
    <div className="inline-flex gap-6">
      <SelectField
        placeholder="All Brand"
        options={allBrands}
        value={selectedBrand}
        onValueChange={(val) => {
          setSelectedBrand(val);
          handleUpdateQuery(
            val,
            selectedOutlet,
            selectedDepartment,
            selectedStatus,
          );
        }}
      />
      <SelectField
        placeholder="All Outlets"
        options={allOutlets}
        value={selectedOutlet}
        onValueChange={(val) => {
          setSelectedOutlet(val);
          handleUpdateQuery(
            selectedBrand,
            val,
            selectedDepartment,
            selectedStatus,
          );
        }}
      />
      <SelectField
        placeholder="All Department"
        options={allDepartment}
        value={selectedDepartment}
        onValueChange={(val) => {
          setSelectedDepartment(val);
          handleUpdateQuery(selectedBrand, selectedOutlet, val, selectedStatus);
        }}
      />
      <SelectField
        placeholder="All Status"
        options={allStatus}
        value={selectedStatus}
        onValueChange={(val) => {
          setSelectedStatus(val);
          handleUpdateQuery(
            selectedBrand,
            selectedOutlet,
            selectedDepartment,
            val,
          );
        }}
      />
    </div>
  );
};

export default StockCountMultipleFilter;

const allBrands = [
  { label: "All Brands", value: "all-brands" },
  { label: "Brand A", value: "brand-a" },
  { label: "Brand B", value: "brand-b" },
];
const allOutlets = [
  { label: "All Outlets", value: "all-outlets" },
  { label: "Outlet A", value: "outlet-a" },
  { label: "Outlet B", value: "outlet-b" },
];
const allDepartment = [
  { label: "All Departments", value: "all-departments" },
  { label: "Department A", value: "department-a" },
  { label: "Department B", value: "department-b" },
];
const allStatus = [
  { label: "All Status", value: "all-status" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];
