"use client";
import SelectField from "@/components/form/SelectField";
import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetDepartment } from "@/queries/departments/useGetDepartment.query";
const OutletFilter = () => {
  const { data: departmentsOption } = useGetDepartment();
  const { outletOptions } = useMultiOptions({
    departments: departmentsOption?.body?.data,
  });

  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Outlet Manager"
        description="Overview of Downtown Outlet Activity."
      />
      <div className="flex items-center justify-between space-x-4  ">
        {/* Brand */}
        <SelectField
          label="All Departments"
          placeholder="Select department"
          options={outletOptions}
          className="w-full bg-white"
          onValueChange={(value) => console.log(value)}
        />
        <div className="w-full ">
          <span>Last updated 2 min ago</span>
        </div>
      </div>
    </GridWrapper>
  );
};

export default OutletFilter;
