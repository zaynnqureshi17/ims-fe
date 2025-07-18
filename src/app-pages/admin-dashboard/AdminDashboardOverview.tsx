import AdminDasboardLabelWithStat from "@/components/statistic/admin-dashboard/AdminDasboardLabelWithStat";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { memo } from "react";


const AdminDashboardOverview = () => {
  return (
    <SectionWrapper title="Master Data Overview">
      <div className="space-y-2">
        {masterDataStats.map((item, index) => (
          <AdminDasboardLabelWithStat
            key={index}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default memo(AdminDashboardOverview);
const masterDataStats = [
  { label: "Total Recipes", value: 120 },
  { label: "Total Suppliers", value: 35 },
  { label: "Total Ingredients", value: 410 },
  { label: "Total Categories", value: 18 },
];
