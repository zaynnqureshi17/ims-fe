import IconBg from "@/components/common/IconBg";
import SelectField from "@/components/form/SelectField";
import { brandsIconPath } from "@/utils/PublicImageBaseUrl";
import React from "react";
interface BrandsStatusRegionFilterProps {
  selectedStatus?: string;
  selectedRegion?: string;
  collapsed?: string;
  setCollapsed: (val: string) => void;
  setSelectedStatus: (val: string) => void;
  setSelectedRegion: (val: string) => void;
  handleUpdateQuery: (
    status?: string,
    region?: string,
    collapsed?: string,
  ) => void;
}

const BrandsStatusRegionFilter: React.FC<BrandsStatusRegionFilterProps> = ({
  selectedStatus,
  selectedRegion,
  collapsed,
  setCollapsed,
  setSelectedStatus,
  setSelectedRegion,
  handleUpdateQuery,
}) => {
  const onToggleCollapse = () => {
    const next = collapsed === "list" ? "grid" : "list";
    setCollapsed(next);
    handleUpdateQuery(selectedStatus, selectedRegion, next);
  };
  return (
    <div className="inline-flex gap-6">
      <SelectField
        placeholder="All Status"
        options={allStatus}
        value={selectedStatus}
        onValueChange={(val) => {
          setSelectedStatus(val);
          handleUpdateQuery(val, selectedRegion, collapsed);
        }}
      />
      <SelectField
        placeholder="All Regions"
        options={allRegions}
        value={selectedRegion}
        onValueChange={(val) => {
          setSelectedRegion(val);
          handleUpdateQuery(selectedStatus, val, collapsed);
        }}
      />
      <div onClick={onToggleCollapse} className="cursor-pointer h-9 w-8">
        {collapsed == "list" ? (
          <IconBg
            icon={`${brandsIconPath}/collapsed-card.svg`}
            title="collapsed-card"
            className="bg-primary-dark-indigo !p-1"
          />
        ) : (
          <IconBg
            icon={`${brandsIconPath}/collapsed-list.svg`}
            title="collapsed-card"
            className="bg-primary-dark-indigo !p-1"
          />
        )}
      </div>
    </div>
  );
};

export default BrandsStatusRegionFilter;

const allStatus = [
  { value: "all-status", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

const allRegions = [
  { value: "all-regions", label: "All Regions" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "north-america", label: "North America" },
  { value: "south-america", label: "South America" },
  { value: "africa", label: "Africa" },
  { value: "oceania", label: "Oceania" },
  { value: "antarctica", label: "Antarctica" },
];
