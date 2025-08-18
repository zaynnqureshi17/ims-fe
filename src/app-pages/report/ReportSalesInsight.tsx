import SectionWrapper from "@/components/wrapper/SectionWrapper";
import React from "react";

// Data for Sales Insight
const salesInsightData = [
  {
    title: "Top Selling Items",
    items: [
      { name: "Burger Deluxe", value: 247 },
      { name: "Caesar Salad", value: 189 },
      { name: "Fish & Chips", value: 156 },
    ],
    isPrice: false,
  },
  {
    title: "Top Profit Items",
    items: [
      { name: "Steak Special", value: "$1,247" },
      { name: "Wine Selection", value: "$1,344" },
      { name: "Seafood Platter", value: "$1,532" },
    ],
    isPrice: true,
  },
  {
    title: "Lowest Moving Items",
    items: [
      { name: "Soup of Day", value: 12 },
      { name: "Desert Special", value: 189 },
      { name: "Side Salad", value: 15 },
    ],
    isPrice: false,
  },
  {
    title: "Items Discounts",
    items: [{ name: "Total Discount Amount", value: "$2,340" }],
    isPrice: true,
  },
];

const ReportSalesInsight = () => {
  return (
    <SectionWrapper title="Sales Insight" className="!bg-transparent !p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {salesInsightData.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">
              {card.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {card.items.map((item, idx) => (
                <li key={idx} className="flex justify-between text-gray-700">
                  <span>{item.name}</span>
                  <span
                    className={card.isPrice ? "text-gray-900" : "text-gray-600"}
                  >
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ReportSalesInsight;
