import { DateRangePicker } from "@/components/form/DateRangePicker";
import SelectField from "@/components/form/SelectField";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";

const filterFields = [
  {
    label: "Brand",
    item: ["All Brands", "Brand A", "Brand B", "Brand C"],
  },
  {
    label: "Outlet",
    item: ["All Outlets", "Outlet X", "Outlet Y", "Outlet Z"],
  },
  {
    label: "Department",
    item: ["All Departments", "Finance", "HR", "Marketing"],
  },
];

const FinanceFilter: React.FC = () => {
  return (
    <GridWrapper className="bg-white p-4 rounded-md grid gap-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ">
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2">
        {filterFields.map((field) => (
          <SelectField
            key={field.label}
            label={field.label}
            item={field.item}
            placeholder={`Select ${field.label}`}
          />
        ))}
      </div>
      <div className="md:col-span-2 xl:col-span-1 flex flex-wrap gap-2">
        <div className="col-span-2">
          <DateRangePicker />
        </div>
        <div className="w-fit place-content-end place-items-end">
          <Button variant="secondary">Apply Filters</Button>
        </div>
      </div>
    </GridWrapper>
  );
};

export default FinanceFilter;
