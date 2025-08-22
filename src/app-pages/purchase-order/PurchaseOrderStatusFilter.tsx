import SelectField from "@/components/form/SelectField";
import { Button } from "@/components/ui/button";
import { AllStatus } from "@/constant/status";
import { usePrefetchNavigate } from "@/hooks/usePrefetchNavigate";
import { ProtectedUrls } from "@/utils/urls/urls";
import React from "react";

interface PurchaseOrderStatusFilterProps {
  selectedStatus?: string;
  selectedSupplier?: string;
  setSelectedStatus: (val: string) => void;
  setSelectedSupplier: (val: string) => void;
  handleUpdateQuery: (status?: string, supplier?: string) => void;
}

const PurchaseOrderStatusFilter: React.FC<PurchaseOrderStatusFilterProps> = ({
  selectedStatus,
  selectedSupplier,
  setSelectedStatus,
  setSelectedSupplier,
  handleUpdateQuery,
}) => {
  const navigate = usePrefetchNavigate();
  const handleAddPO = () => {
    navigate(ProtectedUrls.common.addPurchaseOrder);
  };
  return (
    <div className="inline-flex gap-6">
      <SelectField
        placeholder="All Status"
        options={AllStatus}
        value={selectedStatus}
        onValueChange={(val) => {
          setSelectedStatus(val);
          handleUpdateQuery(val, selectedSupplier);
        }}
      />
      <SelectField
        placeholder="All Supplier"
        options={allSupplier}
        value={selectedSupplier}
        onValueChange={(val) => {
          setSelectedSupplier(val);
          handleUpdateQuery(selectedStatus, val);
        }}
      />
      <div className="flex justify-end items-end">
        <Button variant="secondary" className="w-auto" onClick={handleAddPO}>
          Add New
        </Button>
      </div>
    </div>
  );
};

export default PurchaseOrderStatusFilter;

const allSupplier = [
  { value: "all-suppliers", label: "All Suppliers" },
  { value: "supplier-a", label: "Supplier A" },
  { value: "supplier-b", label: "Supplier B" },
  { value: "supplier-c", label: "Supplier C" },
  { value: "supplier-d", label: "Supplier D" },
];
