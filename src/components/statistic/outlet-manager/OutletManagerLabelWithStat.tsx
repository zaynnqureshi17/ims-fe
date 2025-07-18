interface OutletManagerLabelWithStatProps {
  label: string;
  value: string | number;
}

const OutletManagerLabelWithStat = ({ label, value }: OutletManagerLabelWithStatProps) => {
  return (
    <div className="flex justify-between items-center px-4 ">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="font-bold text-gray-900">{value}</span>
    </div>
  );
};

export default OutletManagerLabelWithStat;
