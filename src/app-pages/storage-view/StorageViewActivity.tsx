import LabelValue from "@/components/common/LabelValue";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const StorageViewActivity = () => {
  return (
    <div className="space-y-4">
      <SectionWrapper title="Quick Stats">
        {summary.map((item, index) => (
          <LabelValue key={index} label={item.label} value={item.value} />
        ))}
      </SectionWrapper>
      <SectionWrapper title="Location">
        <p>
          Building: Main Facility Floor: Ground Floor Zone: A-Section Area:
          2,500{" "}
        </p>
      </SectionWrapper>
      <SectionWrapper title="Capacity">
        {summary.map((item, index) => (
          <LabelValue key={index} label={item.label} value={item.value} />
        ))}
      </SectionWrapper>
    </div>
  );
};

export default StorageViewActivity;
const summary = [
  {
    label: "Active Items",
    value: "247",
  },
  {
    label: "Low Stock",
    value: "89",
  },
  {
    label: "Categories",
    value: "12",
  },
];
