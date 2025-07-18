interface FinanceManagerLabelWithStatProps {
  label: string;
  value: string | number;
  colorClass?: string;
}

const FinanceManagerLabelWithStat = ({
  label,
  value,
  colorClass = "bg-blue-500",
}: FinanceManagerLabelWithStatProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {/* coloured circle */}
        <span className={`w-3 h-3 rounded-full ${colorClass} mr-2`} />
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
};

export default FinanceManagerLabelWithStat;
