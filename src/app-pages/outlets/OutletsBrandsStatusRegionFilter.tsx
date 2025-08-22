import SelectField from "@/components/form/SelectField";
import { AllStatus } from "@/constant/status";
import { optionsType } from "@/utils/types/common.type";
import React from "react";
interface OutletsBrandsStatusRegionFilterProps {
  brandOptions: optionsType[];
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
  brandOptions,
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
        options={AllStatus}
        value={selectedStatus}
        onValueChange={(val) => {
          setSelectedStatus(val);
          handleUpdateQuery(val, selectedBrand, selectedRegion);
        }}
      />
      <SelectField
        placeholder="All Brands"
        options={brandOptions}
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

const allRegions = [
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "north-america", label: "North America" },
  { value: "south-america", label: "South America" },
  { value: "africa", label: "Africa" },
  { value: "oceania", label: "Oceania" },
  { value: "antarctica", label: "Antarctica" },
];
