import SelectField from "@/components/form/Select";
import React from "react";
interface UsersRoleOutletDepartmentFilterProps {
  selectedRole?: string;
  selectedOutlet?: string;
  selectedDepartment?: string;
  setSelectedRole: (val: string) => void;
  setSelectedOutlet: (val: string) => void;
  setSelectedDepartment: (val: string) => void;
  handleUpdateQuery: (
    status?: string,
    outlet?: string,
    collapsed?: string,
  ) => void;
}

const UsersRoleOutletDepartmentFilter: React.FC<
  UsersRoleOutletDepartmentFilterProps
> = ({
  selectedRole,
  selectedOutlet,
  selectedDepartment,
  setSelectedRole,
  setSelectedOutlet,
  setSelectedDepartment,
  handleUpdateQuery,
}) => {
  return (
    <div className="inline-flex gap-6">
      <SelectField
        placeholder="All Roles"
        options={allRoles}
        value={selectedRole}
        onValueChange={(val) => {
          setSelectedRole(val);
          handleUpdateQuery(val, selectedOutlet, selectedDepartment);
        }}
      />
      <SelectField
        placeholder="All Outlets"
        options={allOutlets}
        value={selectedOutlet}
        onValueChange={(val) => {
          setSelectedOutlet(val);
          handleUpdateQuery(selectedRole, val, selectedDepartment);
        }}
      />
      <SelectField
        placeholder="All Departments"
        options={allDepartments}
        value={selectedDepartment}
        onValueChange={(val) => {
          setSelectedDepartment(val);
          handleUpdateQuery(selectedRole, selectedOutlet, val);
        }}
      />
    </div>
  );
};

export default UsersRoleOutletDepartmentFilter;

const allRoles = [
  { value: "all-roles", label: "All Roles" },
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

const allOutlets = [
  { value: "all-outlets", label: "All Outlets" },
  { value: "outlet-1", label: "Outlet 1" },
  { value: "outlet-2", label: "Outlet 2" },
  { value: "outlet-3", label: "Outlet 3" },
];

const allDepartments = [
  { value: "all-departments", label: "All Departments" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
  { value: "engineering", label: "Engineering" },
  { value: "hr", label: "HR" },
  { value: "finance", label: "Finance" },
  { value: "customer-support", label: "Customer Support" },
];
