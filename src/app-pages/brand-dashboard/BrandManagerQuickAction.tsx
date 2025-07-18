import { BarChart, BookOpen, Settings } from "lucide-react";

import QuickAction from "@/components/common/QuickAction";
import GridWrapper from "@/components/wrapper/GridWrapper";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const BrandManagerQuickAction = () => {
  return (
    <SectionWrapper title="Quick Actions" lineDrawn={false} className="mb-4">
      <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white p-4 rounded-md">
        {quickActions.map((action, idx) => (
          <QuickAction
            key={idx}
            icon={action.icon}
            title={action.title}
            description={action.description}
            className="bg-accent"
            />
        ))}
      </GridWrapper>
    </SectionWrapper>
  );
};

export default BrandManagerQuickAction;

const quickActions = [
  {
    icon: <BookOpen className="w-5 h-5 text-orange-400/80  " />,
    title: "Manage Catalogue",
    description: "Update items and pricing",
  },
  {
    icon: <Settings className="w-5 h-5 text-orange-400/80" />,
    title: "Brand Settings",
    description: "Configure brand preferences",
  },
  {
    icon: <BarChart className="w-5 h-5 text-orange-400/80" />,
    title: "Finance Report",
    description: "Generate detailed reports",
  },
];
