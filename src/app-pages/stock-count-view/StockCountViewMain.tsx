"use client";

import SectionWrapper from "@/components/wrapper/SectionWrapper";

const stockCountInfo = [
  { label: "Count Date", value: "2024-01-15" },
  { label: "Count Type", value: "Full Count" },
  { label: "Location", value: "Main Kitchen" },
  { label: "Counted By", value: "John Smith" },
];

const StockCountViewMain = () => {
  return (
    <div className="col-span-2 space-y-4">
      {/* Basic Info */}
      <SectionWrapper
        title="Basic Info"
        description="Inventory transfer between locations"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 text-sm">
          {stockCountInfo.map((item, index) => (
            <div key={index}>
              <p className="text-gray-600">{item.label}:</p>
              <p className="font-semibold text-black">{item.value}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Notes */}
      <SectionWrapper title="Notes">
        <p className="text-sm text-gray-700">
          Walk-in fridge defrosted yesterday; some condensation on packaging.
          Double-checked dairy shelf.
        </p>
      </SectionWrapper>
    </div>
  );
};

export default StockCountViewMain;
