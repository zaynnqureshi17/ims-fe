"use client";

import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { ISupplier } from "@/utils/types/supplier.type";
import { BadgeCheck } from "lucide-react";

const SupplierViewMain = ({
  supplierViewData,
}: {
  supplierViewData: ISupplier;
}) => {
  const {
    category,
    company_name,
    registration_code,
    supplier_code,
    area_short,
    finance_code,
    pic,
    contact_number,
    email,
    status,
  } = supplierViewData;

  const supplierInfo = [
    { label: "Category", value: category },
    { label: "Company Name", value: company_name },
    { label: "Registration Code", value: registration_code },
    { label: "Supplier Code", value: supplier_code },
    { label: "Service Area", value: area_short },
    { label: "Finance Code", value: finance_code },
    { label: "PIC", value: pic },
    { label: "Contact", value: contact_number },
    { label: "Email", value: email },
  ];

  return (
    <div className="col-span-2">
      <SectionWrapper title="Basic Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm">
          {supplierInfo.map((item, index) => (
            <div key={index}>
              <p className="text-gray-500">{item.label}</p>
              <p className="font-medium text-black">
                {Array.isArray(item.value) ? item.value.join(", ") : item.value}
              </p>
            </div>
          ))}

          <div>
            <p className="text-gray-500">Status</p>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium mt-1">
              <BadgeCheck className="w-4 h-4" />
              {status}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SupplierViewMain;
