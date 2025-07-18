export interface OutletManagerLabelWithStatWasteProps {
  label: string;
  value: string | number;
  colorClass?: string;
}

const OutletManagerLabelWithStatWaste = ({
  label,
  value,
  colorClass = "bg-red-500",
}: OutletManagerLabelWithStatWasteProps) => {
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

export default OutletManagerLabelWithStatWaste;
