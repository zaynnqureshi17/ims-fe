import SelectField from "@/components/form/SelectField";
import React from "react";

interface ItemReceivingMultipleFilterProps {
  selectedStatus?: string;
  selectedCategory?: string;
  selectedBrand?: string;
  selectedSubCategory?: string;
  selectedSupplier?: string;

  setSelectedStatus: (val: string) => void;
  setSelectedCategory: (val: string) => void;
  setSelectedBrand: (val: string) => void;
  setSelectedSubCategory: (val: string) => void;
  setSelectedSupplier: (val: string) => void;
  handleUpdateQuery: (
    status?: string,
    category?: string,
    brand?: string,
    subCategory?: string,
    supplier?: string,
  ) => void;
}

const ItemReceivingMultipleFilter: React.FC<
  ItemReceivingMultipleFilterProps
> = ({
  selectedStatus,
  selectedCategory,
  selectedBrand,
  selectedSubCategory,
  selectedSupplier,
  setSelectedStatus,
  setSelectedCategory,
  setSelectedBrand,
  setSelectedSubCategory,
  setSelectedSupplier,
  handleUpdateQuery,
}) => {
  return (
    <div className="inline-flex gap-6">
      <SelectField
        className="w-[150px] bg-white"
        placeholder="All Status"
        options={allStatus}
        value={selectedStatus}
        onValueChange={(val) => {
          setSelectedStatus(val);
          handleUpdateQuery(
            val,
            selectedCategory,
            selectedBrand,
            selectedSubCategory,
            selectedSupplier,
          );
        }}
      />
      <SelectField
        className="w-[150px] bg-white"
        placeholder="All Categories"
        options={allCategories}
        value={selectedCategory}
        onValueChange={(val) => {
          setSelectedCategory(val);
          handleUpdateQuery(
            selectedStatus,
            val,
            selectedBrand,
            selectedSubCategory,
            selectedSupplier,
          );
        }}
      />
      <SelectField
        className="w-[150px] bg-white"
        placeholder="Subcategory"
        options={allSubCategories}
        value={selectedSubCategory}
        onValueChange={(val) => {
          setSelectedSubCategory(val);
          handleUpdateQuery(
            selectedStatus,
            selectedCategory,
            selectedBrand,
            val,
            selectedSupplier,
          );
        }}
      />
      <SelectField
        className="w-[150px] bg-white"
        placeholder="Supplier"
        options={allSuppliers}
        value={selectedSupplier}
        onValueChange={(val) => {
          setSelectedSupplier(val);
          handleUpdateQuery(
            selectedStatus,
            selectedCategory,
            selectedBrand,
            selectedSubCategory,
            val,
          );
        }}
      />
      <SelectField
        className="w-[150px] bg-white"
        placeholder="Brand"
        options={allBrands}
        value={selectedBrand}
        onValueChange={(val) => {
          setSelectedBrand(val);
          handleUpdateQuery(
            selectedStatus,
            selectedCategory,
            val,
            selectedSubCategory,
            selectedSupplier,
          );
        }}
      />
    </div>
  );
};

export default ItemReceivingMultipleFilter;

const allStatus = [
  { value: "all-status", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

const allCategories = [
  { value: "all-category", label: "All Categories" },
  { value: "category-a", label: "Category A" },
  { value: "category-b", label: "Category B" },
  { value: "category-c", label: "Category C" },
  { value: "category-d", label: "Category D" },
];

const allSubCategories = [
  { value: "all-subcategory", label: "All Subcategories" },
  { value: "subcategory-a", label: "Subcategory A" },
  { value: "subcategory-b", label: "Subcategory B" },
  { value: "subcategory-c", label: "Subcategory C" },
];

const allSuppliers = [
  { value: "all-supplier", label: "All Suppliers" },
  { value: "supplier-a", label: "Supplier A" },
  { value: "supplier-b", label: "Supplier B" },
  { value: "supplier-c", label: "Supplier C" },
];

const allBrands = [
  { value: "all-brand", label: "All Brands" },
  { value: "brand-a", label: "Brand A" },
  { value: "brand-b", label: "Brand B" },
  { value: "brand-c", label: "Brand C" },
];
