"use client";
import SelectField from "@/components/form/SelectField";
import { Input } from "@/components/ui/input";
import React from "react";

const CATEGORY_OPTIONS = [
  { value: "all-categories", label: "All Categories" },
  { value: "food", label: "Food" },
  { value: "beverage", label: "Beverage" },
  { value: "packaging", label: "Packaging" },
];

const REASON_OPTIONS = [
  { value: "all-reason", label: "All Reason" },
  { value: "expired", label: "Expired" },
  { value: "damaged", label: "Damaged" },
  { value: "overproduction", label: "Over Production" },
];

const STAFF_OPTIONS = [
  { value: "all-staff", label: "All Staff" },
  { value: "101", label: "John Doe" },
  { value: "102", label: "Ayesha Khan" },
  { value: "103", label: "Ali Raza" },
];

interface WasteMultipleFilterProps {
  selectedStartDate: string;
  selectedEndDate: string;
  selectedCategory: string;
  selectedReason: string;
  selectedStaff: string;
  setSelectedStartDate: (val: string) => void;
  setSelectedEndDate: (val: string) => void;
  setSelectedCategory: (val: string) => void;
  setSelectedReason: (val: string) => void;
  setSelectedStaff: (val: string) => void;
  handleUpdateQuery: (
    startDate?: string,
    endDate?: string,
    category?: string,
    reason?: string,
    staff?: string,
  ) => void;
}

const WasteMultipleFilter: React.FC<WasteMultipleFilterProps> = ({
  selectedStartDate,
  selectedEndDate,
  selectedCategory,
  selectedReason,
  selectedStaff,
  setSelectedStartDate,
  setSelectedEndDate,
  setSelectedCategory,
  setSelectedReason,
  setSelectedStaff,
  handleUpdateQuery,
}) => {
  return (
    <div className="inline-flex gap-6">
      <Input
        type="date"
        value={selectedStartDate}
        onChange={(e) => {
          const v = e.target.value;
          setSelectedStartDate(v);
          handleUpdateQuery(
            v,
            selectedEndDate,
            selectedCategory,
            selectedReason,
            selectedStaff,
          );
        }}
        className="w-[160px] bg-white"
        placeholder="mm/dd/yyyy"
      />
      <Input
        type="date"
        value={selectedEndDate}
        onChange={(e) => {
          const v = e.target.value;
          setSelectedEndDate(v);
          handleUpdateQuery(
            selectedStartDate,
            v,
            selectedCategory,
            selectedReason,
            selectedStaff,
          );
        }}
        className="w-[160px] bg-white"
        placeholder="mm/dd/yyyy"
      />
      <SelectField
        placeholder="All Categories"
        options={CATEGORY_OPTIONS}
        value={selectedCategory}
        onValueChange={(val) => {
          setSelectedCategory(val);
          handleUpdateQuery(
            selectedStartDate,
            selectedEndDate,
            val,
            selectedReason,
            selectedStaff,
          );
        }}
      />
      <SelectField
        placeholder="All Reason"
        options={REASON_OPTIONS}
        value={selectedReason}
        onValueChange={(val) => {
          setSelectedReason(val);
          handleUpdateQuery(
            selectedStartDate,
            selectedEndDate,
            selectedCategory,
            val,
            selectedStaff,
          );
        }}
      />
      <SelectField
        placeholder="All Staff"
        options={STAFF_OPTIONS}
        value={selectedStaff}
        onValueChange={(val) => {
          setSelectedStaff(val);
          handleUpdateQuery(
            selectedStartDate,
            selectedEndDate,
            selectedCategory,
            selectedReason,
            val,
          );
        }}
      />
    </div>
  );
};

export default WasteMultipleFilter;
