import IconBg from "@/components/common/IconBg";
import SelectField from "@/components/form/SelectField";
import { brandsIconPath } from "@/utils/PublicImageBaseUrl";
import React from "react";

interface CatalogueSupplierFilterProps {
  selectedCategory?: string;
  selectedSupplier?: string;
  collapsed?: string;
  setCollapsed: (val: string) => void;
  setSelectedCategory: (val: string) => void;
  setSelectedSupplier: (val: string) => void;
  handleUpdateQuery: (
    category?: string,
    supplier?: string,
    collapsed?: string,
  ) => void;
}

const CatalogueSupplierFilter: React.FC<CatalogueSupplierFilterProps> = ({
  selectedCategory,
  selectedSupplier,
  collapsed,
  setCollapsed,
  setSelectedCategory,
  setSelectedSupplier,
  handleUpdateQuery,
}) => {
  const onToggleCollapse = () => {
    const next = collapsed === "list" ? "grid" : "list";
    setCollapsed(next);
    handleUpdateQuery(selectedCategory, selectedSupplier, next);
  };
  return (
    <div className="inline-flex gap-6">
      <SelectField
        placeholder="All Categories"
        options={allCategories}
        value={selectedCategory}
        onValueChange={(val) => {
          setSelectedCategory(val);
          handleUpdateQuery(val, selectedSupplier);
        }}
      />
      <SelectField
        placeholder="All Suppliers"
        options={allSuppliers}
        value={selectedSupplier}
        onValueChange={(val) => {
          setSelectedSupplier(val);
          handleUpdateQuery(selectedCategory, val);
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

export default CatalogueSupplierFilter;

const allCategories = [
  { value: "all-categories", label: "All Categories" },
  { value: "category-a", label: "Category A" },
  { value: "category-b", label: "Category B" },
  { value: "category-c", label: "Category C" },
  { value: "category-d", label: "Category D" },
];

const allSuppliers = [
  { value: "all-suppliers", label: "All Suppliers" },
  { value: "supplier-a", label: "Supplier A" },
  { value: "supplier-b", label: "Supplier B" },
  { value: "supplier-c", label: "Supplier C" },
  { value: "supplier-d", label: "Supplier D" },
];
