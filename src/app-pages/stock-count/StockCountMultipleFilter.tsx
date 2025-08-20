import SelectField from "@/components/form/SelectField";
import { Input } from "@/components/ui/input";
import React from "react";

interface StockCountMultipleFilterProps {
  selectedCategory: string;
  selectedStatus: string;
  selectedStorageArea: string;
  selectedDeliveryData: string;
  setSelectedCategory: (val: string) => void;
  setSelectedStatus: (val: string) => void;
  setSelectedStorageArea: (val: string) => void;
  setSelectedDeliveryData: (val: string) => void;
  handleUpdateQuery: (
    selectedDeliveryData: string,
    category: string,
    storageArea: string,
    status: string,
  ) => void;
}

const StockCountMultipleFilter: React.FC<StockCountMultipleFilterProps> = ({
  selectedCategory,
  selectedStatus,
  selectedStorageArea,
  setSelectedCategory,
  setSelectedStatus,
  setSelectedStorageArea,
  handleUpdateQuery,
  selectedDeliveryData,
  setSelectedDeliveryData,
}) => {
  return (
    <div className="inline-flex gap-6">
      <Input
        type="date"
        value={selectedDeliveryData}
        onChange={(e) => {
          const v = e.target.value;
          setSelectedDeliveryData(v);
          handleUpdateQuery(
            v,
            selectedCategory,
            selectedStorageArea,
            selectedStatus,
          );
        }}
        className="w-[160px] bg-white"
        placeholder="mm/dd/yyyy"
      />
      <SelectField
        placeholder="All Categories"
        options={allCategories}
        value={selectedCategory}
        onValueChange={(val) => {
          setSelectedCategory(val);
          handleUpdateQuery(
            selectedDeliveryData,
            val,
            selectedStorageArea,
            selectedStatus,
          );
        }}
      />
      <SelectField
        placeholder="All Storage Areas"
        options={allStorageAreas}
        value={selectedStorageArea}
        onValueChange={(val) => {
          setSelectedStorageArea(val);
          handleUpdateQuery(
            selectedDeliveryData,
            selectedCategory,
            val,
            selectedStatus,
          );
        }}
      />
      <SelectField
        placeholder="All Status"
        options={allStatus}
        value={selectedStatus}
        onValueChange={(val) => {
          setSelectedStatus(val);
          handleUpdateQuery(
            selectedDeliveryData,
            selectedCategory,
            selectedStorageArea,
            val,
          );
        }}
      />
    </div>
  );
};

export default StockCountMultipleFilter;

const allCategories = [
  { label: "All Categories", value: "all-categories" },
  { label: "Category A", value: "category-a" },
  { label: "Category B", value: "category-b" },
];

const allStorageAreas = [
  { label: "All Storage Areas", value: "all-storage-areas" },
  { label: "Storage Area A", value: "storage-area-a" },
  { label: "Storage Area B", value: "storage-area-b" },
];

const allStatus = [
  { label: "All Status", value: "all-status" },
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];
