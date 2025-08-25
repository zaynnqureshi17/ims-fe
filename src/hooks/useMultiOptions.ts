import { useMemo } from "react";

import { IIngredient } from "@/utils/types/ingredient.type";
import { ISupplier } from "@/utils/types/supplier.type";

type Role = { role_id: string; role_name: string };
type Outlet = { outlet_id: string; outlet_name: string };
type Department = { department_id: string; department_name: string };
type Brand = { brand_id: string; brand_name: string };
type Item = { item_id: string; item_name: string };

type UseOptionsInput = {
  roles?: Role[];
  outlets?: Outlet[];
  departments?: Department[];
  brands?: Brand[];
  items?: Item[];
  suppliers?: ISupplier[];
  ingredients?: IIngredient[];
};

type Options = {
  roleOptions: { label: string; value: string }[];
  outletOptions: { label: string; value: string }[];
  departmentOptions: { label: string; value: string }[];
  brandOptions: { label: string; value: string }[];
  itemOptions: { label: string; value: string }[];
  supplierOptions: { label: string; value: string }[];
  ingredientOptions: { label: string; value: string }[];
};

export function useMultiOptions({
  roles,
  outlets,
  departments,
  brands,
  items,
  suppliers,
  ingredients,
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

  const itemOptions = useMemo(() => {
    if (!items) return [];
    return items.map((item) => ({
      label: item.item_name,
      value: item.item_id,
    }));
  }, [items]);

  const supplierOptions = useMemo(() => {
    if (!suppliers) return [];
    return suppliers.map((supplier) => ({
      label: supplier.company_name,
      value: String(supplier.supplier_id),
    }));
  }, [suppliers]);

  const ingredientOptions = useMemo(() => {
    if (!ingredients) return [];
    return ingredients.map((ingredient) => ({
      label: ingredient.item_name,
      value: String(ingredient.ingredient_id),
    }));
  }, [ingredients]);

  return {
    roleOptions,
    outletOptions,
    departmentOptions,
    brandOptions,
    itemOptions,
    supplierOptions,
    ingredientOptions,
  };
}
