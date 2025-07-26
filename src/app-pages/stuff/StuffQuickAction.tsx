import QuickAction from "@/components/common/QuickAction";
import GridWrapper from "@/components/wrapper/GridWrapper";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { ClipboardList, Trash2, Utensils } from "lucide-react";

const StuffQuickAction = () => {
  return (
    <SectionWrapper
      title="Quick Actions"
      lineDrawn={false}
      className="!bg-accent !rounded-none !mb-0  !px-0 !shadow-none "
    >
      <GridWrapper className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !bg-accent !my-0 rounded-md ">
        {quickActions.map((action, idx) => (
          <QuickAction
            key={idx}
            icon={action.icon}
            title={action.title}
            description={action.description}
            iconBgColor={action.iconBgColor}
            className="bg-white"
          />
        ))}
      </GridWrapper>
    </SectionWrapper>
  );
};

export default StuffQuickAction;

const quickActions = [
  {
    icon: <ClipboardList className="w-5 h-5 text-red-500" />,
    title: "Start Stock Count",
    description: "Begin inventory counting",
    iconBgColor: "bg-red-100",
  },
  {
    icon: <Trash2 className="w-5 h-5 text-purple-600" />,
    title: "Log Waste",
    description: "Record food waste",
    iconBgColor: "bg-purple-100",
  },
  {
    icon: <Utensils className="w-5 h-5 text-green-600" />,
    title: "Submit Production",
    description: "Record meal production",
    iconBgColor: "bg-green-100",
  },
];
