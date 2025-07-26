interface AdminDasboardLabelWithStatProps {
  label: string;
  value: string | number;
}

const AdminDasboardLabelWithStat = ({
  label,
  value,
}: AdminDasboardLabelWithStatProps) => {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="font-bold text-gray-900">{value}</span>
    </div>
  );
};

export default AdminDasboardLabelWithStat;
