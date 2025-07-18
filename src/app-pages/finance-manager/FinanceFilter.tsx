import { DateRangePicker } from '@/components/form/DateRangePicker';
import SelectField from '@/components/form/SelectField';
import GridWrapper from '@/components/wrapper/GridWrapper';
import React from 'react';

const filterFields = [
  {
    label: 'Brand',
    item: ['All Brands', 'Brand A', 'Brand B', 'Brand C'],
  },
  {
    label: 'Outlet',
    item: ['All Outlets', 'Outlet X', 'Outlet Y', 'Outlet Z'],
  },
  {
    label: 'Department',
    item: ['All Departments', 'Finance', 'HR', 'Marketing'],
  },
];

const FinanceFilter = () => {
  return (
    <GridWrapper className="bg-white p-4 rounded-md grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filterFields.map((field) => (
        <SelectField key={field.label} label={field.label} item={field.item} />
      ))}
      <DateRangePicker/>
    </GridWrapper>
  );
};

export default FinanceFilter;
