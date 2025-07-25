export interface labelValueProps {
  label: string;
  value: string | number;
}

const LabelValue = ({ label, value }: labelValueProps) => {
  return (
    <div className="flex justify-between items-center  gap-0 ">
      <span className="text-sm text-gray">{label}</span>
      <span className="font-bold text-gray-900">{value}</span>
    </div>
  );
};

export default LabelValue;
