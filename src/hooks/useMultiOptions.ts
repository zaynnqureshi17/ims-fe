import { useMemo } from "react";

type Role = { role_id: string; role_name: string };
type Outlet = { outlet_id: string; outlet_name: string };
type Department = { department_id: string; department_name: string };
type Brand = { brand_id: string; brand_name: string };

type UseOptionsInput = {
  roles?: Role[];
  outlets?: Outlet[];
  departments?: Department[];
  brands?: Brand[];
};

type Options = {
  roleOptions: { label: string; value: string }[];
  outletOptions: { label: string; value: string }[];
  departmentOptions: { label: string; value: string }[];
  brandOptions: { label: string; value: string }[];
};

export function useMultiOptions({
  roles,
  outlets,
  departments,
  brands,
}: UseOptionsInput): Options {
  const roleOptions = useMemo(() => {
    if (!roles) return [];
    return roles.map((role) => ({
      label: role.role_name,
      value: role.role_id,
    }));
  }, [roles]);

  const outletOptions = useMemo(() => {
    if (!outlets) return [];
    return outlets.map((outlet) => ({
      label: outlet.outlet_name,
      value: outlet.outlet_id,
    }));
  }, [outlets]);

  const departmentOptions = useMemo(() => {
    if (!departments) return [];
    return departments.map((department) => ({
      label: department.department_name,
      value: department.department_id,
    }));
  }, [departments]);

  const brandOptions = useMemo(() => {
    if (!brands) return [];
    return brands.map((brand) => ({
      label: brand.brand_name,
      value: brand.brand_id,
    }));
  }, [brands]);

  return { roleOptions, outletOptions, departmentOptions, brandOptions };
}
