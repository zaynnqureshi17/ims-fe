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
    <GridWrapper className="bg-white p-4 rounded-md grid gap-4 grid-cols-1 sm:grid-cols-3 ">
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {filterFields.map((field) => (
          <SelectField
            key={field.label}
            label={field.label}
            item={field.item}
            placeholder={`Select ${field.label}`}
          />
        ))}
      </div>
      <div className=" col-span-1 grid grid-cols-1 sm:grid-cols-3 ">
        <div className="col-span-2">
          <DateRangePicker />
        </div>
        <div className="col-span-1 place-content-end">
          <Button variant="secondary">Apply Filters</Button>
        </div>
      </div>
    </GridWrapper>
  );
};

export default FinanceFilter;
