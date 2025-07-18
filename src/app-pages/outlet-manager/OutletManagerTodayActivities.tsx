import { TodayPurchaseActivities } from "@/components/recent-activities";
import { TodayPurchaseActivitiesProps } from "@/components/recent-activities/TodayPurchaseActivities";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { Check, Clock } from "lucide-react";

const OutletManagerTodayActivities = () => {
  return (
    <SectionWrapper title='Today"s Purchase Orders'>
      {todayPurchaseActivities.map((item, idx) => (
        <TodayPurchaseActivities key={idx} {...item} />
      ))}
    </SectionWrapper>
  );
};

export default OutletManagerTodayActivities;

export const todayPurchaseActivities: TodayPurchaseActivitiesProps[] = [
  {
    name: "PO-2024-001",
    des: "Fresh Produce Supplier",
    icon: <Check className="w-5 h-5" />,
    value: "$1,245.50",
    statusText: "Approved",
    variant: "success",
    statusVariant: "success",
  },
  {
    name: "PO-2024-002",
    des: "Dairy Supplier",
    icon: <Clock className="w-5 h-5" />,
    value: "$740.00",
    statusText: "Pending",
    variant: "warning",
    statusVariant: "warning",
  },
  {
    name: "PO-2024-003",
    des: "Bakery Supplier",
    icon: <Clock className="w-5 h-5" />,
    value: "$500.00",
    statusText: "Delayed",
    variant: "error",
    statusVariant: "error",
  },
];
