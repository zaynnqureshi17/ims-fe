import SelectField from "@/components/form/SelectField";
import PageHeader from "@/components/page-header";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { Filter } from "lucide-react";
const OutletFilter = () => {
  return (
    <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 ">
      <PageHeader
        heading="Outlet Manager"
        description="Overview of Downtown Outlet Activity."
      />
      <div className="flex items-center justify-between space-x-4  ">
        <SelectField
          icon={<Filter className="h-5 w-5 text-gray-500" />}
          placeholder="All Department"
          item={departmentOptions}
        />
        <div className="w-full ">
          <span>Last updated 2 min ago</span>
        </div>
      </div>
    </GridWrapper>
  );
};

export default OutletFilter;

const departmentOptions = ["all", "kitchen", "bar", "dining"];
