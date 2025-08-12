import SelectField from "@/components/form/SelectField";
import { useGetDepartment } from "@/queries/departments/useGetDepartment.query";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";
import { useGetRoles } from "@/queries/roles/useGetRoles.query";
import React, { useMemo } from "react";

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
  const { data: roles } = useGetRoles();
  const { data: outlets } = useGetOutlets({});
  const { data: departments } = useGetDepartment();
  const roleOptions = useMemo(() => {
    if (!roles?.body) return [];
    return roles.body.roles.map((role: any) => ({
      value: role.role_name,
      label: role.role_name.replace(/_/g, " "),
    }));
  }, [roles]);
  const outletOptions = useMemo(() => {
    if (!outlets?.body) return [];
    return outlets.body.data.map((outlet: any) => ({
      value: outlet.outlet_name,
      label: outlet.outlet_name.replace(/_/g, " "),
    }));
  }, [outlets]);

  const departmentOptions = useMemo(() => {
    if (!departments?.body) return [];
    return departments.body.departments.map((department: any) => ({
      value: department.department_name,
      label: department.department_name.replace(/_/g, " "),
    }));
  }, [departments]);
  return (
    <div className="inline-flex gap-6">
      <SelectField
        placeholder="All Roles"
        options={roleOptions}
        value={selectedRole}
        onValueChange={(val) => {
          setSelectedRole(val);
          handleUpdateQuery(val, selectedOutlet, selectedDepartment);
        }}
      />
      <SelectField
        placeholder="All Outlets"
        options={outletOptions}
        value={selectedOutlet}
        onValueChange={(val) => {
          setSelectedOutlet(val);
          handleUpdateQuery(selectedRole, val, selectedDepartment);
        }}
      />
      <SelectField
        placeholder="All Departments"
        options={departmentOptions}
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
