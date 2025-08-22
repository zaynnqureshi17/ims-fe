import SelectField from "@/components/form/SelectField";
import React from "react";
interface OutletsBrandsStatusRegionFilterProps {
  selectedStatus?: string;
  selectedRegion?: string;
  selectedBrand?: string;
  setSelectedBrand: (val: string) => void;
  setSelectedStatus: (val: string) => void;
  setSelectedRegion: (val: string) => void;
  handleUpdateQuery: (status?: string, region?: string, brand?: string) => void;
}

const OutletsBrandsStatusRegionFilter: React.FC<
  OutletsBrandsStatusRegionFilterProps
> = ({
  selectedStatus,
  selectedRegion,
  selectedBrand,
  setSelectedBrand,
  setSelectedStatus,
  setSelectedRegion,
  handleUpdateQuery,
}) => {
  return (
    <div className="inline-flex gap-6">
      <SelectField
        placeholder="All Status"
        options={allStatus}
        value={selectedStatus}
        onValueChange={(val) => {
          setSelectedStatus(val);
          handleUpdateQuery(val, selectedBrand, selectedRegion);
        }}
      />
      <SelectField
        placeholder="All Brands"
        options={allBrands}
        value={selectedBrand}
        onValueChange={(val) => {
          setSelectedBrand(val);
          handleUpdateQuery(selectedStatus, val, selectedRegion);
        }}
      />
      <SelectField
        placeholder="All Regions"
        options={allRegions}
        value={selectedRegion}
        onValueChange={(val) => {
          setSelectedRegion(val);
          handleUpdateQuery(selectedStatus, selectedRegion, val);
        }}
      />
    </div>
  );
};

export default OutletsBrandsStatusRegionFilter;

const allStatus = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

const allRegions = [
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "north-america", label: "North America" },
  { value: "south-america", label: "South America" },
  { value: "africa", label: "Africa" },
  { value: "oceania", label: "Oceania" },
  { value: "antarctica", label: "Antarctica" },
];

const allBrands = [
  { value: "brand-a", label: "Brand A" },
  { value: "brand-b", label: "Brand B" },
  { value: "brand-c", label: "Brand C" },
  { value: "brand-d", label: "Brand D" },
];
