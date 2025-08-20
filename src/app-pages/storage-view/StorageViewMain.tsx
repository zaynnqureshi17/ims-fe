"use client";

import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { BadgeCheck } from "lucide-react";

const supplierInfo = [
  { label: "Category", value: "Food" },
  { label: "Company Name", value: "Tech Solutions Ltd." },
  { label: "Registration Code", value: "REG-789456123" },
  { label: "Supplier Code", value: "SUP-2024-001" },
  { label: "Service Area", value: "SU, KU" },
  { label: "Finance Code", value: "FIN-2024-001" },
  { label: "PIC", value: "John Anderson" },
  { label: "Contact", value: "+1 (555) 123-4567" },
  { label: "Email", value: "john.anderson@techsolutions.com" },
];

const StorageViewMain = () => {
  return (
    <div className="col-span-2 space-y-4">
      <SectionWrapper title="Basic Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm">
          {supplierInfo.map((item, index) => (
            <div key={index}>
              <p className="text-gray-500">{item.label}</p>
              <p className="font-semibold text-black">{item.value}</p>
            </div>
          ))}

          <div>
            <p className="text-gray-500">Status</p>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-medium mt-1">
              <BadgeCheck className="w-4 h-4" />
              Active
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Description">
        <p className="text-gray">
          Primary storage facility for electronics inventory including
          smartphones, laptops, tablets, and accessories. Climate-controlled
          environment with security monitoring. Capacity for 5,000+ items with
          organized shelving system and barcode tracking.
        </p>
      </SectionWrapper>
    </div>
  );
};

export default StorageViewMain;
