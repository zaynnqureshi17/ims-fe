import OutletManagerLabelWithStatWaste, {
  OutletManagerLabelWithStatWasteProps,
} from "@/components/statistic/outlet-manager/OutletManagerLabelWithStatWaste";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

const OutletManagerWasteSummary = () => {
  return (
    <SectionWrapper title="Waste Summary">
      <div className="flex flex-col items-center justify-center gap-2 mb-4">
        <span className="text-red-500 text-center text-3xl font-bold">
          $284.50
        </span>
        <p>Total waste Today</p>
      </div>
      {wasteSummary.map((item, index) => (
        <OutletManagerLabelWithStatWaste
          key={index}
          label={item.label}
          value={item.value}
          colorClass={item.colorClass}
        />
      ))}
    </SectionWrapper>
  );
};

export default OutletManagerWasteSummary;
const wasteSummary: OutletManagerLabelWithStatWasteProps[] = [
  { label: "Kitchen", value: "$4,230", colorClass: "bg-red-500" },
  { label: "Bar", value: "$2,890", colorClass: "bg-red-500" },
];
