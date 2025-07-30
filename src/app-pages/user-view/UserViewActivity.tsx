import LabelValue from "@/components/common/LabelValue";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const UserViewActivity = () => {
  return (
    <div className="space-y-4">
      <SectionWrapper title="Activity Summary">
        {summary.map((item, index) => (
          <LabelValue key={index} label={item.label} value={item.value} />
        ))}
      </SectionWrapper>
      <SectionWrapper title="Recent Activity">
        {recentActivity.map((activity, index) => (
          <div key={index} className="flex flex-col ">
            <span className="text-base text-gray">{activity.action}</span>
            <span className="text-gray-500">{activity.hour}</span>
          </div>
        ))}
      </SectionWrapper>
    </div>
  );
};

export default UserViewActivity;
const summary = [
  {
    label: "Login Sessions",
    value: "247",
  },
  {
    label: "Order Created",
    value: 89,
  },
  {
    label: "Reports Generated",
    value: 56,
  },
];
const recentActivity = [
  {
    action: "Created purchase order PO-345",
    hour: "2 hours ago",
  },
  {
    action: "Updated stock count for Downtown Branch",
    hour: "1 day ago",
  },
];
