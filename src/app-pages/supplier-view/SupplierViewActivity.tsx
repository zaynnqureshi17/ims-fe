import LabelValue from "@/components/common/LabelValue";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const SupplierViewActivity = () => {
  return (
    <div className="space-y-4">
      <SectionWrapper title="Statistics & Activity">
        {summary.map((item, index) => (
          <LabelValue key={index} label={item.label} value={item.value} />
        ))}
      </SectionWrapper>
    </div>
  );
};

export default SupplierViewActivity;
const summary = [
  {
    label: "Linked Items",
    value: "247",
  },
  {
    label: "Linked POs",
    value: "89",
  },
  {
    label: "Created On",
    value: "July 5, 2025 – 14:42",
  },
  {
    label: "Last Updated",
    value: "July 5, 2025 – 14:42",
  },
];
